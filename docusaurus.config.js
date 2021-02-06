module.exports = {
  title: 'Openpesa',
  tagline: 'Online payments API',
  url: 'https://openpesa.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'openpesa', // Usually your GitHub org/user name.
  projectName: 'openpesa.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Openpesa',
      logo: {
        alt: 'Openpesa Logo',
        srcDark: 'img/openpesa_logo.webp',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/introduction',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/openpesa/openpesa.github.io',
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
              label: 'Guide',
              to: 'docs/introduction',
            },
            
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/openpesa',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/openpesa',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/openpesa',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/openpesa',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Openpesa, Org. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/docs/',
          // Please change this to your repo.
          editUrl:
            'https://github.com/openpesa/openpesa.github.io/edit/main/',
        },
        blog: {
          showReadingTime: true,          
          editUrl:
            'https://github.com/openpesa/openpesa.github.io/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
