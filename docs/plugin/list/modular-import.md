---
title: modular-import（不推荐）
order: 12
---

import Support from '../../../src/components/Support'

<Support list={['webpack']} />

> 推荐直接基于 tree-shaking 直接在按需的构建，babel-plugin-import 会引入一些副作用，不推荐使用

用于快捷增加 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 的配置。

## Install

```bash
$ npm i --save-dev build-plugin-modular-import
```

## Usage

```json
{
  "plugins": [
    [
      "build-plugin-modular-import",
      [
        {
          "libraryName": "lodash",
          "libraryDirectory": "",
          "camel2DashComponentName": false
        }
      ]
    ]
  ]
}
```
