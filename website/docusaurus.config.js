// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Azure Machine Learning Playbook',
  tagline: 'Tips & Practices from Azure CXP - FastTrack for Azure',
  url: 'https://github.com/konabuta/',
  baseUrl: '/azure-machine-learning-playbook/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'konabuta', // Usually your GitHub org/user name.
  projectName: 'azure-machine-learning-playbook', // Usually your repo name.
  trailingSlash: false,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/konabuta/azure-machine-learning-playbook',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/konabuta/azure-machine-learning-playbook',
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
      navbar: {
        title: 'Playbook',
        logo: {
          alt: 'Playbook',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'azuremlSidebar',
            label: 'AzureML',
          },
          // //URL is http://127.0.0.1:3000/azure-machine-learning-playbook/docs/docusaurus-tutorials/docusaurus-intro
          // {
          //   type: 'docSidebar',
          //   position: 'left',
          //   sidebarId: 'tutorialSidebar',
          //   label: 'Tutorials',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/konabuta/azure-machine-learning-playbook',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'left',
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
                href: 'https://stackoverflow.com/questions/tagged/azure-machine-learning-service?tab=Newest',
              },
              {
                label: 'Microsoft Tech Community',
                href: 'https://techcommunity.microsoft.com/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Sample codes',
                href: 'https://github.com/Azure/azureml-examples',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Microsoft Corporation. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

// default theme to Dark
module.exports = {
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
  },
};

module.exports = config;