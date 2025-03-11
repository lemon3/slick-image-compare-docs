import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Slick Image Compare',
  description: 'A fast, lightweight image compassion slider',

  lang: 'en-US',
  base: '/',

  assetsDir: 'assets',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Getting started', link: '/intro/getting-started' },
      { text: 'Examples', link: '/examples/basic' },
    ],

    sidebar: [
      {
        text: 'Intro',
        items: [{ text: 'Getting started', link: '/intro/getting-started' }],
      },
      {
        text: 'API',
        items: [
          { text: 'Options', link: '/api/options' },
          { text: 'Methods', link: '/api/methods' },
          { text: 'Events', link: '/api/events' },
          { text: 'Static Functions', link: '/api/static-functions' },
        ],
      },
      {
        text: 'Examples',
        items: [
          {
            text: 'Complete Source Modern',
            link: '/examples/complete-source-modern',
          },
          {
            text: 'Complete Source Classic',
            link: '/examples/complete-source-classic',
          },
          { text: 'Basic', link: '/examples/basic' },
          { text: 'Start position', link: '/examples/start-position' },
          { text: 'Handle Angle', link: '/examples/handle-angle' },
          { text: 'Responsive Images', link: '/examples/responsive-images' },
          { text: 'Follow Mouse', link: '/examples/follow-mouse' },
          { text: 'Snap to start', link: '/examples/snap-to-start' },
          { text: 'Right to Left', link: '/examples/right-to-left' },
          { text: 'Multiple Slider', link: '/examples/multiple-slider' },
          { text: 'Advanced', link: '/examples/advanced' },
        ],
      },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020-present lemon3.at',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lemon3/slick-image-compare' },
    ],
  },
});
