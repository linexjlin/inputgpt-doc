import { defineConfig } from 'dumi';

export default defineConfig({
  html2sketch: {},
  favicons: [
    '/logo.png',
  ],
  autoAlias: false,
  themeConfig: {
    name: 'InputGPT',
    logo: '/logo.png',
    footer:  'Powered by InputGPT',
    socialLinks: {
      github: 'https://github.com/linexjlin/inputGPT',
    },
  },
  locales: [
    { id: 'en-US', name: 'EN' },
    { id: 'zh-CN', name: '中文' },
  ],
  sitemap: { hostname: 'https://inputgpt.vercel.app' },
});
