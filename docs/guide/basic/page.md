---
title: 页面路由组件
order: 7
---

import Badge from '../../../src/components/Badge'

页面路由组件对应一个路由，进入对应路由时会渲染该组件，同时离开该路由的时候也会卸载该组件，相比于普通的 React 组件，页面路由组件会有一些增强的能力，比如可以定义一些配置项、默认会携带一些 props 等。

## 页面组件配置项

框架为页面级组件提供了一些特殊的配置项，让页面级组件可以快速拥有一些能力。支持两种配置方式：

- 中心化配置在 `src/routes.ts` 中
- 去中心化配置在每个页面组件入口 tsx 中

### 1. 中心化配置在 `src/routes.ts` 中（推荐）<Badge text="2.0.0" />

对于使用配置式路由的开发者，推荐中心化配置在 `src/routes.ts` 中，管理起来更加方便：

```diff
import UserLogin from '@/pages/UserLogin';

export default [
  {
    path: '/login',
    component: UserLogin,
+    pageConfig: {
+      title: '登录页面',
+    },
  },
];

export default routerConfig;
```

pageConfig 支持的配置项：

- title: `String`，配置页面标题
- scrollToTop: `Boolean`，默认 false，进入页面时是否要滚动到顶部
- auth: `String[]`，配置页面准入权限角色列表
- errorBoundary: `Boolean`，默认 false，是否为页面组件包裹 `ErrorBoundary`
- keepAlive: `Boolean`，由 `plugin-keep-alive` 插件扩展，默认 `true`
- spm: `String`，由 `plugin-spm` 插件扩展

### 2. 去中心化配置在每个页面组件上

对于使用文件约定路由的项目，只能去中心化配置在每个页面组件上。

```diff
// src/pages/Home/index.tsx
import React from 'react';

const Home = () => {
  return (
    <div>Home</div>
  );
};

+ Home.pageConfig = {
+   title: 'Home'
+ };

export default Home;
```

## 页面组件默认 props

框架默认会传入路由相关的信息给页面组件，组件可以直接通过 props 访问：

```jsx
// src/pages/Home/index.tsx
import React from 'react';

const Home = (props) => {
  const {
    history,
    location,
    match,
    searchParams,
    pageConfig,
  } = props;

  return (
    <div>Home</div>
  );
};

export default Home;
```

参数说明请参考：[路由组件参数](/guide/basic/router.md#路由组件参数)

## 页面组件静态方法

通过 `Page.getInitialProps()` 在 SSR/SSG 的时候异步获取初始属性：

```diff
// src/pages/Home/index.tsx
import React from 'react';

const Home = ({ stars }) => {
  return (
    <div>Home stars: {stars}</div>
  );
};

+ Home.getInitialProps = async (ctx) => {
+   const res = await request.get('https://api.github.com/repos/alibaba/ice');
+   return { stars: res.data.stargazers_count };
+ }

export default Home;
```

通过 `Page.getStaticPaths()` 指定 SSG 时动态路由的页面需要渲染出哪些具体的路由页面：

```diff
// src/pages/Project/index.tsx
import React from 'react';
import { useParams } from 'ice';

const Project = () => {
  const params = useParams();

  return (
    <div>Project id: {params.id}</div>
  );
};

+ Project.getStaticPaths = async () => {
+   return ['/project/1', 'project/100'];
+ }

export default Project;
```
