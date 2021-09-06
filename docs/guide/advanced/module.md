---
title: 预编译开发模式
order: 8
---

借助 webpack5 的 Module Federation 特性，icejs 框架支持将应用的依赖预构建为一个 Module Federation 的 remote 应用，供当前应用进行消费，应用依赖不再编译到一个文件中，以减少 webpack 对于依赖打包所需的时间。

## 开启预编译

在 build.json 中配置 `remoteRuntime` 进行开启：

```json
{
  "remoteRuntime": true
}
```

除了默认开启的能力之外，`remoteRuntime` 还提供了以下的属性：

- activeInBuild：`boolean` 默认为 `false`。开启后将在生产构建下使用预编译方案，预编译产物将会生成到对应的输出目录下
- include：`string|string[]`，通过正则规则指定参与预编译的三方依赖（预编译通过源码依赖自动分析大部分场景下无需设置）
- exclude：：`string|string[]`，通过正则规则指定忽略参与预编译的三方依赖（预编译通过源码依赖自动分析大部分场景下无需设置）

## 预编译效果

通过 Module Federation 预编译的开启，热启动相比 1.x 版本提升明显，并且让热更新时间缩短近 60%。Module Federation 是 webpack 5 提供的能力，对于历史项目可以平滑的迁移适配，以达到项目编译的提速。

![启动速度提升](../../../static/img/mf_01.png) 

![热更新速度提升](../../../static/img/mf_01.png) 

## 常见问题

### 生产环境是否适用

预编译的方案在生产环境下同样适用，但需要注意预编预将会生成大量三方依赖的文件，在入口逻辑执行前需要前置加载完成，在非 http 2.0 网络环境下需要考虑加载性能。并且页面输出中需要包含 `remoteEntry.js` 预编译依赖文件（开发模式下自动会处理）。