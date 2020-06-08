/*
 * @Description: 构建配置
 * @Author:Tony.Xu
 * @Date: 2020年06月08日17:30:24
 */
const path = require('path')
const node = require('rollup-plugin-node-resolve') // 支持第三方包
const cjs = require('rollup-plugin-commonjs') // 转commonjs to es
const buble = require('rollup-plugin-buble') // 转为es5
const { terser } = require('rollup-plugin-terser') // 代码压缩
const version = process.env.VERSION || require('../package.json').version

const resolve = p => {
  return path.resolve(__dirname, '../', p);
}

const banner =
  '/*!\n' +
  ` * Antd Utils v${version}\n` +
  ` * author Tony.Xu\n` +
  ' * utils for Ant Design\n' +
  ' */';

// 默认配置
const defaultPlugins = [
  node(),
  cjs(),
  buble()
];

const builds = {
  'antd-utils': {
    entry: resolve('dist/src/entry-compiler.js'),
    dest: resolve('lib/antd-utils.js'),
    format: 'umd',
    moduleName: 'mUtils',
    banner,
    plugins: defaultPlugins
  },
  'antd-utils-min': {
    entry: resolve('dist/src/entry-compiler.js'),
    dest: resolve('lib/antd-utils-min.js'),
    format: 'umd',
    moduleName: 'mUtils',
    banner,
    plugins: [...defaultPlugins, terser()]
  },
  'antd-utils-cjs': {
    entry: resolve('dist/src/entry-compiler.js'),
    dest: resolve('lib/antd-utils-cjs.js'),
    format: 'cjs',
    banner,
    plugins: defaultPlugins
  },
  'antd-utils-esm': {
    entry: resolve('dist/src/entry-compiler.js'),
    dest: resolve('lib/antd-utils-esm.js'),
    format: 'es',
    banner,
    plugins: defaultPlugins
  },
}

/**
 * 获取对应name的打包配置
 * @param {*} name 
 */
function getConfig(name) {
  const opts = builds[name];
  const config = {
    input: opts.entry,
    external: opts.external || [],
    plugins: opts.plugins || [],
    output: {
      file: opts.dest,
      format: opts.format,
      banner: opts.banner,
      name: opts.moduleName || 'AntdUtils',
      globals: opts.globals,
      exports: 'named', /** Disable warning for default imports */
    },
    onwarn: (msg, warn) => {
      warn(msg);
    }
  }

  Object.defineProperty(config, '_name', {
    enumerable: false,
    value: name
  });
  return config;
}

if (process.env.TARGET) {
  module.exports = getConfig(process.env.TARGET);
} else {
  exports.defaultPlugins = defaultPlugins;
  exports.getBuild = getConfig;
  exports.getAllBuilds = () => Object.keys(builds).map(getConfig);
}