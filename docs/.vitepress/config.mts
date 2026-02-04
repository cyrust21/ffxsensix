import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "FFX Sensix",
  description: "Sensitivitas Tool",
  themeConfig: {
    logo: '/logo.png', // Taruh file logo di docs/public/logo.png
    siteTitle: 'FFX Sensix',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Download', link: 'https://github.com/...' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/cyrust21/ffxsensix' }
    ],
    // Footer website
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present CyrusT21'
    }
  }
})
