const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Py2neo',
  tagline: 'Where python meets Neo4j',
  url: 'https://py2neo.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/py2neo.ico',
  organizationName: 'py2neo-org', // Usually your GitHub org/user name.
  projectName: 'py2neo', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Py2neo',
      logo: {
        alt: 'Py2neo',
        src: 'img/py2neo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'about/overview',
          position: 'left',
          label: 'About',
        },
        {
          type: 'doc',
          docId: 'projects/py2neo/py2neo',
          position: 'left',
          label: 'Projects',
        },
        /** {to: '/blog', label: 'Blog', position: 'left'},*/
        {
          href: 'https://github.com/py2neo-org/py2neo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Quickstart Guides',
          items: [
            {
              label: 'Py2neo',
              to: '/docs/py2neo',
            },
            {
              label: 'iPy2neo',
              to: '/docs/ipy2neo/quickstart',
            },
            {
              label: 'Graphio',
              to: '/docs/graphio/quickstart',
            },
            {
              label: 'Grolt',
              to: '/docs/grolt/quickstart',
            },
            {
              label: 'Proxy2neo',
              to: '/docs/proxy2neo/quickstart',
            },
          ],
        },
        {
          title: 'Full Documentation',
          items: [
            {
              label: 'Py2neo',
              to: 'https://docs.py2neo.org/py2neo',
            },
            {
              label: 'iPy2neo',
              to: 'https://docs.py2neo.org/ipy2neo',
            },
            {
              label: 'Graphio',
              to: 'https://docs.py2neo.org/graphio',
            },
            {
              label: 'Grolt',
              to: 'https://docs.py2neo.org/grolt',
            },
            {
              label: 'Proxy2neo',
              to: 'https://docs.py2neo.org/proxy2neo',
            },
          ],
        },
         {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              to: 'https://linkedin.com',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/py2neo',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/py2neo-org',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Py2neo. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
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
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
