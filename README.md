# Antd Utils

## 版本

| 名称 | 方法名 | 类型 | demo | 稳定版本 |
| :--: |  :--: | :--: | :--: | :--: |
| 表格转置 | transformTable | Table | [文档](https://xunge0613.github.io/antd-utils/demo/src-demos-transform-table) | 0.1.5 |
| 复制 tags | pasteTags |  Select | [文档](https://xunge0613.github.io/antd-utils/demo/src-demos-paste-tags) | 0.1.5 |
| TS 枚举转 select options | enum2Options | Select | [文档](https://xunge0613.github.io/antd-utils/demo/src-demos-transform-table) | 0.1.5 |
| 获取 url 参数 | getQueryString |  Utils | [文档](https://xunge0613.github.io/antd-utils/demo/src-demos-get-querystring.ts) | 0.1.6 |

## 编译

``` javascript
npm run compile
npm run compile:w  // 可监听
```

## 测试

``` javascript
npm run test
```

## 打包

``` javascript
npm run build
```

## 自定义打包

``` javascript
// 打包umd格式，兼容浏览器和node环境
npm run dev

// 打包cjs格式
npm run dev:cjs

// 打包es6格式
npm run dev:esm
```

## 发布

``` javascript
npm publish
```

## Getting Started 开始使用

1. Using npm (Recomended)

``` javascript

import AntdUtils from '@antd-utils';
// or
import { transformTable } from '@antd-utils';

```

2. Using `<script>`

Direct import using `<script>`, use `antd-utils.js` or compressed version `antd-utils-min.js`, call `window.AntdUtils.xxx`

浏览器直接引入，使用 `antd-utils.js` 或者压缩版 `antd-utils-min.js`，调用 `window.AntdUtils.xxx`


### 编写工具函数

1. 在src下创建对应函数的文件 xx(工具类，如date)/xxx.ts

2. 在入口文件entry-compiler.ts 导入

``` javascript
import xxx from './xx/xxx.ts'
export = {
    ...
    xxx
}
```

3. 在index.d.ts中添加类型声明， 如

``` javascript
declare namespace AntdUtils {
    ...
    export function xxx():void
}
```

### 编写单元测试用例

1. 在test下创建命名为xx.spec.ts文件，然后写单元测试用例使用mocha

2. 执行 ```npm run test```， 可在终端查看测试通过情况和代码覆盖率

### 编译、打包构建、发布

``` javascript
// 修改提交后，直接执行以下命令，即可完成编译、打包、发布
npm run publish:patch 
npm run publish:minor
npm run publish:major
npm run publish:premajor
```

## 鸣谢

打包构建基于 @ghfengye 的 [https://github.com/ghfengye/mutils](https://github.com/ghfengye/mutils)

## Contact

Feel free to raise issues and contact me

github: [https://github.com/xunge0613](https://github.com/xunge0613)
weibo: @徐迅爱上大
