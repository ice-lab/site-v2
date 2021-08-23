---
title: esbuild
order: 10
---

使用 [`esbuild`](https://github.com/evanw/esbuild) 进行代码压缩，显著提升代码压缩速度。

:::caution

**已废弃**，icejs 2.0 版本中已支持通过配置 **"minify": "esbuild"** 开启

:::

## Install

```bash
$ npm i --save-dev build-plugin-esbuild
```

## Usage

```diff
{
  "plugins": [
+    "build-plugin-esbuild"
  ]
}
```
