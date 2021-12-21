---
title: Vite 模式
order: 4
---

import Support from '../../../src/components/Support'
import Badge from '../../../src/components/Badge'

<Badge text="2.0.0" />

[Vite](https://vitejs.dev/) 是一种新型的前端构建工具，与 Webpack 相比，Vite 基于浏览器原生的 ES Module 规范能够让调试服务以及热更新更快，提升开发者体验。icejs 2.0 版本开始同时支持 Webpack@5 以及 Vite@2 两种模式，开发者按需选择，对于增量业务我们更推荐采用 Vite 的构建模式。

## 快速体验

除 Fusion Design Pro 以外，其他官方脚手架均已经默认切换到 Vite 模式，按照 [快速开始](/guide/start.md) 直接使用即可：

```bash
$ npm init ice <projectName>
# or
$ yarn create ice <projectName>
```

## 开启 Vite 模式

在 build.json 中进行以下配置启用 Vite 模式：

```json
{
  "vite": true
}
```

## 功能完备度

icejs 提供了非常完备的功能，目前部分能力尚未支持 Vite 模式，具体请参阅以下表格：

|  功能点         |   支持度   |
|----------------|---------------------|
| Severless 一体化| <Support list={['webpack', 'vite']} />
| 微前端          | <Support list={['webpack', 'vite']} />
| SSR&SSG        | <Support list={['webpack']} />
| SPA        | <Support list={['webpack', 'vite']} />
| MPA        | <Support list={['webpack', 'vite']} />

## FAQ

### 如何解决 require is not defined

TODO

Vite 构建模式在开发阶段基于浏览器加载 ESM 模块，不支持 require 语法的导入。启用 Vite 模式需要确保源码或三方依赖符合 ESM 的规范。

### 如何兼容 Webpack 构建模式下 inline loader 的导入

代码中存在 inline loader 的语法，在 Vite 构建模式下将会失效：

```js
import Styles from '!style-loader!css-loader?modules!./styles.css';
```

移除 inline loader 写法，大部分需求可以被内置的工程能力处理，定制 loader 能力推荐结合 Vite 插件的 [transform](https://vitejs.dev/guide/api-plugin.html#transforming-custom-file-types) 进行处理。
