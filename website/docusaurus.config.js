/**
 * Copyright (c) 2019-present Verum Technologies
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'Rapido',
  tagline: 'Build universal native apps incredibly fast.',
  url: 'https://rapidojs.org',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'rapidojs',
  projectName: 'rapido',
  themeConfig: {
    image: 'img/rapido.png',
    navbar: {
      title: 'Rapido',
      logo: {
        alt: 'Rapido Logo',
        src: 'img/logo.svg',
      },
      links: [
        { to: 'docs/getting-started', label: 'Docs', position: 'left' },
        { to: 'help', label: 'Help', position: 'left' },
        { to: 'showcase', label: 'Showcase', position: 'left' },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/verumtech/rapido',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Get Started',
              to: 'docs/getting-started',
            },
            {
              label: 'Learn Expo',
              href: 'https://docs.expo.io/versions/latest/',
            },
            {
              label: 'Learn React',
              href: 'https://reactjs.org/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Help',
              to: 'help',
            },
            {
              label: 'Showcase',
              to: 'showcase',
            },
            {
              label: 'Spectrum',
              href: 'https://spectrum.chat/rapido',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/rapido',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/verumtech/rapido',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/verumtech',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Verum Technologies`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/verumtech/rapido/website/edit/master/docs/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
      },
    ],
  ],
};
