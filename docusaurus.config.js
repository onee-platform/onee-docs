// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Onee Platform | Documentations',
  tagline: 'Onee Platform from Indonesia',
  url: 'https://onee.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'onee-indo', // Usually your GitHub org/user name.
  projectName: 'onee-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          // sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Onee Docs',
        logo: {
          alt: 'Onee Logo',
          src: 'img/onee-big-ico.svg',
        },
        items: [
          {
            position: 'left',
            label: 'Dashboard',
            to: '/docs/dashboard',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Developer Guide',
            items: [
              {
                label: 'Dashboard Graph API',
                to: '/docs/intro',
              },
              {
                label: 'Front Graph API',
                to: '/docs/intro',
              },
              {
                label: 'Design Website',
                to: '/docs/intro',
              },
              {
                label: 'Integrations',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Connect With Us',
            items: [
              {
                label: 'Tik-Tok',
                href: 'https://tiktok.com/@onee.id',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/onee.indo',
              },
              {
                label: 'Facebook',
                href: 'https://facebook.com/onee.indo',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/onee_indo',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Support',
                href: 'https://bendt.io',
              },
              {
                label: 'Live Chat',
                href: 'https://bendt.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Onee Indonesia.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
