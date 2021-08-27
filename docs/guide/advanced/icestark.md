---
title: 微前端 icestark
order: 3
---

[icestark](https://github.com/ice-lab/icestark) 是飞冰团队针对大型系统提供的微前端解决方案。ice.js 提供独立插件 build-plugin-icestark 快速接入 icestark。

> 更多有关 icestark 的内容请访问 👉 [官网](https://micro-frontends.ice.work/)

## 框架应用

通过模板快速创建一个微前端的框架应用：

```bash
$ npm init ice icestark-framework @icedesign/stark-layout-scaffold
$ cd icestark-framework
$ npm install
$ npm start
```

如果不是通过模板创建，则需要按照下面的步骤进行改造：

### 添加插件 build-plugin-icestark

安装插件依赖：

```bash
$ npm i --save-dev build-plugin-icestark
```

在 `build.json` 里引入插件：

```json
{
  "plugins": {
    ["build-plugin-icestark", {
      // 防止与微应用的 webpackJSONP 冲突
      "uniqueName": "frameworkJsonp"
    }],
    ["build-plugin-fusion", {
      "themeConfig": {
        // 防止与微应用里的基础组件 css prefix 冲突
        "css-prefix": "next-icestark-"
      }
    }],
  }
}
```

### 应用入口改造 

应用入口 `src/app.ts` 中配置框架应用的一些运行时信息：

```diff
import { runApp } from 'ice'
+import { ConfigProvider } from '@alifd/next';
+import NotFound from '@/components/NotFound';
+import BasicLayout from '@/layouts/BasicLayout';

const appConfig = {
  app: {
    rootId: 'ice-container',
+    addProvider: ({ children }) => (
+      <ConfigProvider prefix="next-icestark-">{children}</ConfigProvider>
+    ),
  },
  router: {
+    type: 'browser',
  },
  icestark: {
+    type: 'framework',
+    Layout: BasicLayout,
+    getApps: async () => {
+      const apps = [{
+        path: '/seller',
+        title: '商家平台',
+        url: [
+          '//ice.alicdn.com/icestark/child-seller-react/index.js',
+          '//ice.alicdn.com/icestark/child-seller-react/index.css',
+        ],
+      }];
+      return apps;
+    },
+    appRouter: {
+      NotFoundComponent: NotFound,
+    },
  },
};

runApp(appConfig);
```

`appConfig.icestark` 完整的配置项说明：

- type: string, framework|child
- Layout: Component, 系统对应的布局组件
- getApps: function，获取所有微应用数据，单个微应用的完整配置字段请参考 icestark 文档
- appRouter:
  - NotFoundComponent: 404 组件
  - LoadingComponent: 应用切换时的 Loading 组件

## 微应用

通过模板快速创建一个微应用：

``` bash
# 创建微应用
$ npm init ice icestark-child @icedesign/stark-child-scaffold
$ cd icestark-child
$ npm install
$ npm start
```

如果不是通过模板创建，则需要按照下面的步骤进行改造：

### 添加插件 build-plugin-icestark

安装插件依赖：

```bash
$ npm i --save-dev build-plugin-icestark
```

在 `build.json` 里引入插件：

```json
{
  "plugins": {
    ["build-plugin-icestark", {
      "umd": true
    }]
  }
}
```

### 应用入口改造

在应用入口 `src/app.ts` 中配置微应用相关的信息：

```diff
import { runApp } from 'ice'

const appConfig = {
  app: {
    rootId: 'ice-container',
  },
  router: {
+    type: 'browser',
  },
  icestark: {
+    type: 'child',
  },
};

runApp(appConfig)
```

只需要这么简单，你的 SPA 应用就可以变成微应用了。

## 常见问题

### 如何监听微应用切换

`icestark` 通过 `onRouteChange`、`onAppEnter` 和 `onAppLeave` 来监听微应用间的切换，在 icejs 研发框架下可以通过在对应的 Layout 中实现相关钩子的监听。Layout 中接收 props 属性如下：

- pathname：微应用路由切换信息，对应 `onRouteChange`
- appEnter：渲染微应用的信息， `onAppEnter`
- appLeave：卸载微应用的信息，对应 `onAppLeave`

在 Layout 使用相关属性时，结合对应属性是否发生变更来执行相应操作：

```js

const BasicLayout = ({ pathname, appLeave, appEnter, children }) => {
  useEffect(() => {
    console.log(`微应用路由发生变化：${pathname}`);
  }, [pathname]);

  useEffect(() => {
    console.log(`卸载微应用：${appLeave.path}`);
  }, [appLeave]);

  useEffect(() => {
    console.log(`渲染微应用：${appEnter.path}`);
  }, [appEnter]);

  return (
    <div>
      {children}
    </div>
  );
};
```

### 动态修改微应用列表

初始化微应用列表可以如上文介绍在应用入口 `src/app.ts` 中配置 `getApps` 属性即可，如果需要动态修改微应用列表，可以通过 Layout 接收的 `updateApps` 属性进行修改：

```js
const BasicLayout = ({ updateApps, children }) => {
  useEffect(() => {
    updateApps([{
      path: '/seller',
      title: '商家平台',
      url: [
        '//ice.alicdn.com/icestark/child-seller-react/index.js',
        '//ice.alicdn.com/icestark/child-seller-react/index.css',
      ],
    }]);
  }, []);

  return (
    <div>
      {children}
    </div>
  );
}
```

### UMD 规范微应用

icestark 从 `1.6.0` 开始支持并推荐使用 UMD 规范的微应用，在微应用层面可以更少的降低跟主应用的耦合：

- 微应用依赖的 `build-plugin-icestark` 版本需要高于 `2.0.0` 才能支持构建出 UMD 规范的微应用
- 主应用依赖的 `@ice/stark` 版本需要高于 `1.6.0` 才能支持渲染 UMD 规范的微应用

#### 微应用导出 UMD 规范的产物

在 `build.json` 中配置 umd 属性即可导出标准 UMD 规范的微应用：

```json
{
  "plugins": [
    ["build-plugin-icestark", {
      "umd": true
    }]
  ]
}
```

### 向微应用透传 props

icestark 2.x 支持框架应用通过 [props](https://micro-frontends.ice.work/api/core#props) 自定义传递给微应用的参数。

```diff
// 框架应用
const appConfig = {
  ...
  icestark: {
    type: 'framework',
    Layout: BasicLayout,
    getApps: async () => {
      const apps = [{
        path: '/seller',
        title: '商家平台',
        url: [
          '//ice.alicdn.com/icestark/child-seller-react/index.js',
          '//ice.alicdn.com/icestark/child-seller-react/index.css',
        ],
+       props: {
+         name: 'micro-child'
+       }
      }];
      return apps;
    },
   ...
  },
};

runApp(appConfig);
```

在微应用中，可以通过[页面级组件](/guide/basic/router.md#路由组件参数) 的 props 获取框架应用传递的参数。

```js
function About(props) {
  const { frameworkProps: { name } } = props;
  return <div>{name}</div>;
}
```

### 微应用自定义生命周期函数

插件 build-plugin-icestark 会默认为 ice.js 微应用提供[生命周期函数](https://micro-frontends.ice.work/docs/guide/concept/child/#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)。在一些业务场景下，需要自定义生命周期函数，则可以下面的示例进行配置：

```js
import { runApp } from 'ice';
import { isInIcestark } from '@ice/stark-app';
import ReactDOM from 'react-dom';

// 微应用 app.tsx
const appConfig = {
  router: {
    type: 'browser',
  },
  icestark: {
    type: 'child',
  },
};

if (!isInIcestark()) {
  runApp(appConfig);
}

// 自定义 mount 生命周期函数
export function mount () {
  runApp(appConfig)
}

// 自定义 unmount 生命周期函数
export function unmount ({ container }) {
  ReactDOM.unmountComponentAtNode(container)
}
```
