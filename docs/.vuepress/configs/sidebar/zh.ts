import type { SidebarConfig } from '@vuepress/theme-default';

export const zh: SidebarConfig = {
  '/guide/': [
    {
      isGroup: true,
      text: '',
      children: [
        {
          isGroup: true,
          text: '基础指南',
          children: [
            '/guide/basic/start.md',
            '/guide/basic/upgrade.md',
            '/guide/basic/structure.md',
            '/guide/basic/app.md',
            '/guide/basic/router.md',
            '/guide/basic/menu.md',
            '/guide/basic/store.md',
            '/guide/basic/build.md',
            '/guide/basic/config.md',
            '/guide/basic/page.md',
            '/guide/basic/style.md',
            '/guide/basic/component.md',
            '/guide/basic/logger.md',
          ],
        },
        {
          isGroup: true,
          text: '进阶知识',
          children: [
            '/guide/advanced/mpa.md',
            '/guide/advanced/ssr.md',
            '/guide/advanced/icestark.md',
            '/guide/advanced/faas.md',
            '/guide/advanced/code-splitting.md',
            '/guide/advanced/error-boundaries.md',
            '/guide/advanced/auth.md',
            '/guide/advanced/convention-routing.md',
            '/guide/advanced/mock.md',
            '/guide/advanced/proxy.md',
            '/guide/advanced/assets-local.md',
            '/guide/advanced/fusion.md',
            '/guide/advanced/antd.md',
            '/guide/advanced/test.md',
            '/guide/advanced/publish.md',
            '/guide/advanced/quality.md',
            '/guide/advanced/backend.md',
            '/guide/advanced/statistical.md',
          ],
        },
        {
          isGroup: true,
          text: '插件开发',
          children: [
            '/guide/develop/plugin-dev.md',
            '/guide/develop/plugin-build.md',
            '/guide/develop/plugin-runtime.md',
            '/guide/develop/plugin-list.md',
          ],
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
      children: [
        '/resource/front-env.md',
        '/resource/front-basic.md',
        '/resource/npms.md',
        '/resource/biz-components.md',
      ],
    },
  ],
  '/material/': [
    {
      isGroup: true,
      text: '',
      children: [
        {
          isGroup: true,
          text: '基础指南',
          children: [
            '/material/basic/start.md',
            '/material/basic/init.md',
            '/material/basic/component.md',
            '/material/basic/block.md',
            '/material/basic/scaffold.md',
            '/material/basic/generate.md',
            '/material/basic/sync.md',
            '/material/basic/usage.md',
          ],
        },
        {
          isGroup: true,
          text: '进阶知识',
          children: [
            '/material/reference/private.md',
            '/material/reference/protocol.md',
            '/material/reference/custom.md',
            '/material/reference/upgrade.md',
          ],
        },
      ],
    },
  ],
};
