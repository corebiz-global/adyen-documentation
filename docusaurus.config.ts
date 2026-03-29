import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Adyen Connector V3 Documentation',
  tagline: 'Official documentation for the Adyen V3 connector on VTEX',
  favicon: 'img/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://adyen-documentation.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-BR', 'es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/corebiz-global/adyen-documentation/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo.svg',
    navbar: {
      title: '',
      logo: {
        alt: 'Adyen Logo',
        src: 'img/logo-green.svg',
        srcDark: 'img/logo.svg',
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ], 
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Introduction',
              to: '/',
            },
            {
              label: 'Adyen Configuration',
              to: '/adyen-configuration/getting-credentials',
            },
            {
              label: 'VTEX Configuration',
              to: '/vtex-configuration/configuring-provider',
            },
            {
              label: 'Support',
              to: '/support',
            },
          ],
        },
        {
          title: 'Adyen Resources',
          items: [
            {
              label: 'Adyen Academy',
              href: 'https://academy.adyen.com/',
            },
            {
              label: 'Knowledge Hub',
              href: 'https://www.adyen.help/hc/en-us',
            },
            {
              label: 'Developer Documentation',
              href: 'https://docs.adyen.com/',
            },
          ],
        },
        {
          title: 'About Corebiz',
          items: [
            {
              html: `
                <p style="opacity: 0.6; font-size: 0.875rem; line-height: 1.5; margin-bottom: 1.5rem;">
                  Corebiz is a global partner specialized in Adyen and VTEX ecosystems, delivering high-performance payment experiences.
                </p>
              `,
            },
            {
              label: 'Visit Corebiz',
              href: 'https://corebiz.ag',
            },
          ],
        },
      ],
      logo: {
        alt: 'Corebiz Logo',
        src: 'img/corebiz_logo_footer.svg',
        href: 'https://corebiz.ag',
        width: 105,
        height: 23.635,
      },
      copyright: `© ${new Date().getFullYear()} Corebiz. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
