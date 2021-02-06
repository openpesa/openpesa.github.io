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
          to: 'docs/',
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
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
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
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Openpesa, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
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
