import type { SidebarConfig } from '@vuepress/theme-default';
import getDocsFromDir from '../../utils/getDocsFromDir';

export const zh: SidebarConfig = {
  '/guide/': [
    {
      isGroup: true,
      text: '',
      children: [
        '/guide/README.md',
        {
          isGroup: true,
          text: '基础指南',
          children: getDocsFromDir('/guide/basic'),
        },
        {
          isGroup: true,
          text: '进阶知识',
          children: getDocsFromDir('/guide/advanced'),
        },
      ],
    },
  ],
  '/api/': [
    {
      isGroup: true,
      text: '',
      children: ['/api/README.md'],
    },
  ],
  '/config/': [
    {
      isGroup: true,
      text: '',
      children: ['/config/README.md'],
    },
  ],
  '/resource/': [
    {
      isGroup: true,
      text: '',
      children: getDocsFromDir('/resource'),
    },
  ],
  '/material/': [
    {
      isGroup: true,
      text: '',
      children: [
        '/material/README.md',
        {
          isGroup: true,
          text: '基础指南',
          children: getDocsFromDir('/material/basic'),
        },
        {
          isGroup: true,
          text: '参考',
          children: getDocsFromDir('/material/reference'),
        },
      ],
    },
  ],

  '/plugin/': [
    {
      isGroup: true,
      text: '',
      children: [
        {
          isGroup: true,
          text: '插件开发',
          children: getDocsFromDir('/plugin/develop'),
        },
        {
          isGroup: true,
          text: '官方插件',
          children: getDocsFromDir('/plugin/list'),
        },
      ],
    },
  ],

  '/fusion/': [
    {
      isGroup: true,
      text: '',
      children: [
        '/fusion/README.md',
        {
          isGroup: true,
          text: '项目模板',
          children: getDocsFromDir('/fusion/scaffolds'),
        },
        {
          isGroup: true,
          text: '基础组件',
          children: [
            {
              isGroup: true,
              text: '通用',
              children: getDocsFromDir('/fusion/components/general'),
            },
            {
              isGroup: true,
              text: '导航',
              children: getDocsFromDir('/fusion/components/nav'),
            },
            {
              isGroup: true,
              text: '表单',
              children: getDocsFromDir('/fusion/components/form'),
            },
            {
              isGroup: true,
              text: '展示',
              children: getDocsFromDir('/fusion/components/display'),
            },
            {
              isGroup: true,
              text: '反馈',
              children: getDocsFromDir('/fusion/components/feedback'),
            },
            {
              isGroup: true,
              text: '方法',
              children: getDocsFromDir('/fusion/components/util'),
            },
          ],
        },
        {
          isGroup: true,
          text: '业务组件',
          children: getDocsFromDir('/fusion/components-biz'),
        },
      ],
    },
  ],

  '/antd/': [
    {
      isGroup: true,
      text: '',
      children: [
        '/antd/README.md',
        {
          isGroup: true,
          text: '项目模板',
          children: getDocsFromDir('/antd/scaffolds'),
        },
        // {
        //   isGroup: true,
        //   text: '基础组件',
        //   children: getDocsFromDir('/antd/components'),
        // },
        // {
        //   isGroup: true,
        //   text: '业务组件',
        //   children: getDocsFromDir('/antd/components-biz'),
        // },
      ],
    },
  ],
};
