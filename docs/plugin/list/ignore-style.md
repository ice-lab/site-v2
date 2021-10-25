---
title: ignore-style
order: 3
---

import Support from '../../../src/components/Support'

<Support list={['webpack', 'vite']} />

对于基础组件依赖，如 `@alifd/next`、`antd` 等，在对样式引入的时候，推荐直接以全量样式的方式引入。特别是一些大型的项目，其冗余的样式大小可以忽略不计。

对于依赖 `babel-plugin-import` 构建后自动引入了样式的组件，官方提供 `build-plugin-ignore-style` 的插件进行忽略，比如如下的样式引入将在启用插件后被忽略：

```js
import '@alifd/next/lib/button/style';
import '@alifd/next/es/button/style';
```

## Install

```bash
$ npm install build-plugin-ignore-style --save-dev
```

## Options

- `libraryName`：指定需要忽略样式引入的依赖包名
- `style`：指定引入的样式规则，默认值为 `style`, 即会匹配规则为 `${packageName}/(es|lib)/${componentName}/style` 的样式引入


## Usage

在 build.json 中引入插件：

```json
{
  "plugins": [
    [
      "build-plugin-ignore-style",
      {
        "libraryName": "antd"
      }
    ]
  ]
}
```

如果希望同时忽略多个依赖包的样式引入，可以通过如下方式配置：

```json
{
  "plugins": ["build-plugin-ignore-style", [
    {
      "libraryName": "@alifd/next"
    },
    {
      "libraryName": "antd"
    }
  ]]
}
```
