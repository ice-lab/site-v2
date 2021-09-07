---
title: 构建时预渲染
order: 5
---

icejs 提供构建时预渲染方案，即在构建时渲染页面组件并生成静态的 HTML 文件，以更好解决以下的业务场景：

- 静态站点生成
- 没有后端服务的场景下需要更好的 SEO 和更少的首屏渲染时间

## 开启预渲染

在工程配置文件 `build.json` 中开启：

```json
{
  "ssr": "static"
}
```

假如现在有以下的目录结构：

```markdown
/with-prerender-spa/src
├── pages
|  ├── Dashboard
|  ├── Home
└── routes.ts
```

对应的路由配置如下：

```js
import Home from '@/pages/Home';
import Dashboard from '@/pages/Dashboard';

export default [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/dashboard',
    exact: true,
    component: Dashboard
  }
];
```

执行 `npm run build`，将会得到以下的构建产物：

```markdown
├── build
|  ├── dashboard
|  |  └── index.html   # 预渲染 Dashboard 页面组件得到的 HTML
|  ├── index.html      # 预渲染 Home 页面组件得到的 HTML
|  └── js
|     └── index.js
└── server
|  ├── index.js
|  ├── loadable-stats.json
|  └── pages-data.json
```

通过静态服务启动，通过预渲染后的 HTML 截图如下：

![html](https://img.alicdn.com/imgextra/i1/O1CN01U6YANR1scx8IMIz6A_!!6000000005788-2-tps-2468-1750.png)

## 预渲染动态路由

预渲染默认不渲染动态路由里的所有页面，比如 `/about/:id`。如果需要渲染动态路由中的页面，可以在`src/routes.ts` 中配置 `getStaticPath` 函数：

```js
import About from '@/pages/About';

export default [
  {
    path: '/about/:id',
    exact: true,
    component: About,
    getStaticPath: () => {
      // 构建时将会渲染 /about/a /about/b /about/c 页面组件
      return Promise.resolve(['/about/a', '/about/b', '/about/c']);
    }
  }
];
```

执行 `npm run build` 后，将会得到以下的构建产物：

```markdown
build
├── about
|  ├── a
|  |  └── index.html
|  ├── b
|  |  └── index.html
|  └── c
|     └── index.html
├── js
|  └── index.js
└── server
|  ├── index.js
|  ├── loadable-stats.json
|  └── pages-data.json
```

## 部分页面使用 SSR

预渲染的时机是应用构建时，当用户访问时，页面上的数据不一定是最新的。如果某些页面有较多的实时数据，或者动态路由数量不可枚举时，可以为此页面开启 SSR：

```js
import Dashboard from '@/pages/Dashboard';

export default [
  {
    path: '/dashboard',
    exact: true,
    component: Dashboard,
    ssr: true
  }
];
```

这样在构建时不会为该页面预渲染生成静态 HTML，生产环境下需要配合服务端进行渲染。服务端集成的相关内容可参考下面[使用 Node.js 部署](/docs/guide/advanced/ssg#部署)文档。

## 部署

### 使用静态资源服务器

如果是博客、官网等页面数据较为静态的应用，可以直接使用 Nginx、OSS、GitHub Pages 等进行部署，以 Nginx 部署为例：

```plain
location / {
    root   /www/build;
    # 访问 localhost:3000/a 依次查找 /www/build/a、/www/build/a/index.html、/www/build/404.html
    try_files $uri $uri/ 404.html;
}
```

### 使用 Node.js 服务器

对于有部分页面组件开启 SSR 的情况，生产环境下需要对应的服务端进行渲染，核心逻辑如下：

```js

const express = require('express');
const path = require('path');
const fse = require('fs-extra');
const app = express()

const renderBundlePath = path.join(__dirname, './build', 'server/index.js');
const webStatsPath = path.join(__dirname, './build', 'loadable-stats.json');
const pagesData = require('./build/server/pages-data.json'); // 预渲染生成静态 HTML 内容

app.get('/*', async function (req, res) {
  const render = require(renderBundlePath);
  // 如果在路由配置中配置了 ssr: true，则使用服务端渲染页面，否则直接返回预渲染生成的静态 HTML
  const { html, error, redirectUrl } = await render.default({ req, res }, { loadableStatsPath: webStatsPath, pagesData });
  if (redirectUrl) {
    ctx.res.redirect(302, redirectUrl);
  } else if (error) {
    console.log('[SSR ERROR]', 'serverRender error', error);
  } else {
    res.send(html)
  }
})
 
app.listen(3000)
```
