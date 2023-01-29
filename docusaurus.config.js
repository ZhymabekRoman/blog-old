// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ZhymabekRoman's site",
  tagline: 'Be best version of yourself',
  url: 'https://zhymabekroman.github.io',
  baseUrl: '/blog/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/profile.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ZhymabekRoman', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.

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
        docs: false,
        blog: {
		path: 'posts',
          routeBasePath: 'posts',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/ZhymabekRoman/blog/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        //defaultMode: 'dark',
      },
      navbar: {
        title: "ZhymabekRoman's site",
        logo: {
          alt: 'My Site Logo',
          src: 'img/profile.png',
        },
        items: [
          { to: 'posts', label: 'Blog', position: 'right' },
          {
            href: 'https://github.com/ZhymabekRoman/blog',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/13452914/zhymabek-roman',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/users/928066920907948073/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ZhymabekRoman',
              },
              {
                label: '4PDA',
                href: 'https://4pda.to/forum/index.php?showuser=5638528',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Zhymabek Roman, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
