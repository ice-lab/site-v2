---
title: modular-import
order: 11
---

用于快捷增加 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 的配置

import Support from '../../../src/components/Support'

<Support list={['webpack']} />

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
        },
        {
          "libraryName": "@material-ui/core",
          "libraryDirectory": "components",
          "camel2DashComponentName": false
        }
      ]
    ]
  ]
}
```
