---
title: vite 构建
order: 4
---

icejs 在确保不丢失框架运行时和工程能力的基础之上提供一键切换 vite 构建模式的配置，让开发者以 native ES module 的方式进行开发，为开发者带来极致的调试体验。

## 快速体验

通过 cli 方式快速初始化一个 icejs 项目，体验 vite 模式带来的开发体验：

```bash
$ npm init ice <projectName> --template @alifd/scaffold-simple
# or
$ yarn create ice <projectName> --template @alifd/scaffold-simple
```

## 开启 vite 构建

默认情况下，项目的构建基于 webpack，在 build.json 中进行以下配置启用 vite 构建：

```json
{
  "vite": true
}
```

## 自定义 vite 配置

大部分场景下，框架工程已处理 webpack 切换到 vite 构建的能力兼容，可以通过[工程配置](/docs/config/about)进行定制。对于特殊场景和自定义 vite 工程的需求，可以对 vite 配置项进行定制：

```js
// build.config.ts
import vitePlugin from 'vite-plugin';

export default {
  // icejs plugin
  plugins: ['build-plugin-fusion'],
  vite: {
    // specify vite plugin
    plugins: [vitePlugin()],
    // extends esbuild's own transform options
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
    },
  },
}
```

> vite 配置支持配置项参考 [vite 文档](https://vitejs.dev/config/)

## FAQ

#### 如何解决 require is not defined

vite 构建模式在开发阶段基于浏览器加载 ESM 模块，不支持 require 语法的导入。启用 vite 模式需要确保源码或三方依赖符合 ESM 的规范。

#### 如何兼容 webpack 构建模式下 inline loader 的导入

代码中存在 inline loader 的语法，在 vite 构建模式下将会失效：

```js
import Styles from '!style-loader!css-loader?modules!./styles.css';
```

移除 inline loader 写法，大部分需求可以被内置的工程能力处理，定制 loader 能力推荐结合 vite 插件的 [transform](https://vitejs.dev/guide/api-plugin.html#transforming-custom-file-types) 进行处理
