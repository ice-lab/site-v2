---
title: 日志打印
order: 12
---

前端应用中常见的使用最多的毋庸置疑是 `console.log`，然而很多时候我们只希望在开发环境中打印日志，在生产环境中则不打印日志，或者设置日志的级别，避免生产环境的调试日志在生产环境中出现，这便是框架内置提供的日志功能的初衷。

## 日志分类

框架日志分为 TRACE、DEBUG、INFO、WARN、ERROR 和 SILENT 6 个级别，分别在不同的场景下使用：

* `console.trace(msg)`：输出一个堆栈跟踪
* `console.debug(msg)`：输出一个调试日志
* `console.log(msg)`：输出一个信息日志
* `console.warn(msg)`：输出一个警告日志
* `console.error(msg)`：输出一个错误日志

## 运行时配置

### smartLoglevel

当开启 `smartLoglevel: true` 时，可通过在当前地址栏的 url 加上 `__loglevel__` 来动态设置日志级别，可以非常方便的进行调试。

app.js 配置如下:

```ts
import { runApp, config } from 'ice';

// 用于配置
const appConfig = {
  logger: {
    smartLoglevel: true
  }
};

runApp(appConfig);
```

设置 loglevel 为 info

```md
http://localhost:3333/#/?__loglevel__=info

or

https://ice.work/?__loglevel__=info
```

当开启 `smartLoglevel: true` 但并未在地址栏的 url 上添加 `__loglevel__` 参数时，则默认值在开发环境下设置为 debug ，在生产环境下设置为 warn。

### level

在某些场景下也可在 `src/config.ts` 中根据不同环境配置 loglevel:

```js
export default {
  default: {
    loglevel: 'warn'
  },
  production: {
    loglevel: 'error'
  }
}
```

在 `src/app.ts` 中将配置的 loglevel 传递给 logger：

```js
import { runApp, config } from 'ice';

// 用于配置
const appConfig = {
  logger: {
    level: config.loglevel
  }
};

runApp(appConfig);
```


## 构建配置

在运行时配置的基础上，icejs 支持通过日志级别移除最终产物中的日志代码。

### dropLogLevel

默认值为：`trace`。

在 `build.json` 中进行如下配置：

```json
{
  "dropLogLevel": "warn"
}
```

如上配置后，最终产物中将会移除所有 `warn` 级别以下的日志：`console.trace`/`console.debug`/`console.log`。


**根据不同环境设置移除日志的级别：**

```json
{
  "modeConfig": {
    "daily": {
      "dropLogLevel": "trace"
    },
    "prod": {
      "dropLogLevel": "error"
    }
  }
}
```

## 与 icejs1.x 的区别

### 不再提供 logger 模块

在 icejs1.x 中，开发者需要如下使用：

```javascript
import { logger } from 'ice';

logger.info('log info');
```

而在 icejs2.x 中，开发者可以直接使用 `console.*`。

### 具备自动移除日志代码的能力

详见 `dropLogLevel` 的使用。
