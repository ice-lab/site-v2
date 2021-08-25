---
title: webpack5
order: 4
---

用于 icejs 在使用 webpack 5 能力上的兼容处理

:::caution

**已废弃**，icejs 2.0 版本中内置 webpack 5 的工程链路，Module Federation 调试方案参考[进阶文档](/guide/advanced/module.md)

:::

## Install

```bash
$ npm i --save-dev build-plugin-webpack5 webpack
```

## Usage

`build.json` 修改如下：

```diff
{
+  "customWebpack": true,
  "plugins": [
+    "build-plugin-webpack5"
  ]
}
```

### 配置 Module Federation

在上述开启 webpack 5 能力的基础上，通过配置 moduleFederation 可以配置 Module Federation 相关参数：

```json
{
  "customWebpack": true,
  "moduleFederation": {
    "remotes": ["remote"],
    "shared": ["react", "react-dom"]
  },
  "plugins": ["build-plugin-webpack5"]
}
```
