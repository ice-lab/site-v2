/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const getDocsFromDir = require('../scripts/getDocsFromDir');

module.exports = {
  docs: [
    'guide/about',
    'guide/start',
    'guide/upgrade',
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
  resource: getDocsFromDir('resource'),
  fusion: [
    'fusion/about',
    {
      type: 'category',
      label: '通用',
      collapsed: false,
      items: getDocsFromDir('fusion/components/general'),
    },
    {
      type: 'category',
      label: '导航',
      collapsed: false,
      items: getDocsFromDir('fusion/components/nav'),
    },
    {
      type: 'category',
      label: '表单',
      collapsed: false,
      items: getDocsFromDir('fusion/components/form'),
    },
    {
      type: 'category',
      label: '展示',
      collapsed: false,
      items: getDocsFromDir('fusion/components/display'),
    },
    {
      type: 'category',
      label: '反馈',
      collapsed: false,
      items: getDocsFromDir('fusion/components/feedback'),
    },
    {
      type: 'category',
      label: '方法',
      collapsed: false,
      items: getDocsFromDir('fusion/components/util'),
    },
    // {
    //   type: 'category',
    //   label: '项目模板',
    //   collapsed: false,
    //   items: getDocsFromDir('fusion/scaffolds')
    // },
    // {
    //   type: 'category',
    //   label: '基础组件',
    //   collapsed: false,
    //   items: [
    //     {
    //       '通用': getDocsFromDir('fusion/components/general'),
    //     },
    //     {
    //       '导航': getDocsFromDir('fusion/components/nav'),
    //     },
    //     {
    //       '表单': getDocsFromDir('fusion/components/form'),
    //     },
    //     {
    //       '展示': getDocsFromDir('fusion/components/display'),
    //     },
    //     {
    //       '反馈': getDocsFromDir('fusion/components/feedback'),
    //     },
    //     {
    //       '方法': getDocsFromDir('fusion/components/util'),
    //     },
    //   ]
    // },
  ],
  // antd: [
  //   'antd/about',
  //   {
  //     type: 'category',
  //     label: '项目模板',
  //     collapsed: false,
  //     items: getDocsFromDir('antd/scaffolds')
  //   },
  // ],
  // api: [
  //   'api/about',
  // ],
  // config: [
  //   'config/about',
  // ]
};