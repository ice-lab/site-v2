---
title: antd
order: 3
---

import Support from '../../../src/components/Support'

<Support list={['webpack', 'vite']} />

支持 antd/antd-mobile 按需构建&主题定制。

## Install

```bash
$ npm install build-plugin-antd --save-dev
```

## Options

插件提供了按需加载和主题定制相关的配置参数：

- `themeConfig` 设置替换主题颜色
- `importOptions` 同 `babel-plugin-import` 按需加载配置，默认参数 `{ libraryDirectory: 'es', style: true}`，根据用户设置进行合并

## Usage

```json
{
  "plugins": [
    [
      "build-plugin-antd",
      {
        "themeConfig": {
          "primary-color": "#1DA57A"
        }
      }
    ]
  ]
}
```

## 常见场景

### 使用 antd-mobile

```json
{
  "plugins": [
    [
      "build-plugin-antd",
      {
        "themeConfig": {
          "brand-primary": "#1DA57A"
        },
        "importOptions": {
          "libraryName": "antd-mobile",
          "libraryDirectory": "es",
          "style": true
        }
      }
    ]
  ]
}
```
