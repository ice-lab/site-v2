---
title: 应用入口
order: 3
---

框架通过调用 `runApp` 创建渲染整个应用，在创建应用时可以传入应用的全局配置。

## 配置规范

通过 `src/app.ts` 对应用进行全局配置，设置路由、运行环境、请求、日志等：

```ts
import { runApp, IAppConfig } from 'ice';

const appConfig: IAppConfig = {
  app: {},
  router: {},
  store: {},
  request: {},
};

runApp(appConfig);
```

## 启动项配置

`app` 这一项所支持的配置：

```js
import { runApp } from 'ice';

const appConfig = {
  app: {
    // 可选，默认 ice-container，根节点 id
    rootId: 'ice-container',

    // 可选，根节点 DOM 元素，更灵活的 rootId
    mountNode: document.getElementById('ice-container'),

    // 可选，默认 true，是否解析路由组件的查询参数
    parseSearchParams: true,

    // 可选，默认 false，是否开启 React.StrictMode，icejs 2.0 开始支持
    strict: false,

    // 可选，自定义添加 Provider
    addProvider: ({ children }) => {
      return <ConfigProvider>{children}</ConfigProvider>;
    },

    // 可选，常用于 SSR 场景或者初始化异步获取数据的场景
    // 如果返回字段中包含 initialStates 字段将会作为状态管理 store 的初始值
    // 如果返回字段中包含 auth 字段将会作为权限管理 auth 的初始值
    getInitialData: async() => {
      const result = await request();
      return result;
    },

    // 可选，自定义错误边界的 fallback UI
    ErrorBoundaryFallback: <div>渲染错误</div>,

    // 可选，自定义错误的处理事件
    onErrorBoundaryHandler: (error, componentStack) => {
      // Do something with the error
    },

    // 可选，用于渲染一个简单组件，不再需要耦合 react-router 的路由系统
    // 需要配合设置 build.json 的 router 项为 false
    renderComponent: SimpleComponent,
  },
};

runApp(appConfig);
```

## 其他配置项

- [路由配置](/guide/basic/router.md#路由配置)
- [请求配置](/guide/basic/request.md#请求配置)
- [状态管理配置](/guide/basic/store.md#配置参数)
