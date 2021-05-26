/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const getDocsFromDir = require('./scripts/getDocsFromDir');

module.exports = {
  docs: [
    'guide/about',
    {
      type: 'category',
      label: '基础指南',
      collapsed: false,
      items: getDocsFromDir('guide/basic')
    },
    {
      type: 'category',
      label: '进阶指南',
      collapsed: false,
      items: getDocsFromDir('guide/advanced')
    },
  ],
  plugin: [
    {
      type: 'category',
      label: '官方插件',
      collapsed: false,
      items: getDocsFromDir('plugin/list')
    },
    {
      type: 'category',
      label: '插件开发',
      collapsed: false,
      items: getDocsFromDir('plugin/develop')
    },
  ],
  material: [
    'material/about',
    {
      type: 'category',
      label: '基础指南',
      collapsed: false,
      items: getDocsFromDir('material/basic')
    },
    {
      type: 'category',
      label: '参考',
      collapsed: false,
      items: getDocsFromDir('material/reference')
    },
  ],
  resource: getDocsFromDir('resource'),
  fusion: [
    'fusion/about',
    {
      type: 'category',
      label: '项目模板',
      collapsed: false,
      items: getDocsFromDir('fusion/scaffolds')
    },
    {
      type: 'category',
      label: '基础组件',
      collapsed: false,
      items: [
        {
          '通用': getDocsFromDir('fusion/components/general'),
        },
        {
          '导航': getDocsFromDir('fusion/components/nav'),
        },
        {
          '表单': getDocsFromDir('fusion/components/form'),
        },
        {
          '展示': getDocsFromDir('fusion/components/display'),
        },
        {
          '反馈': getDocsFromDir('fusion/components/feedback'),
        },
        {
          '方法': getDocsFromDir('fusion/components/util'),
        },
      ]
    },
  ],
  antd: [
    'antd/about',
    {
      type: 'category',
      label: '项目模板',
      collapsed: false,
      items: getDocsFromDir('antd/scaffolds')
    },
  ],
  // api: [
  //   'api/about',
  // ],
  // config: [
  //   'config/about',
  // ]
};