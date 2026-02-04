import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "FFX Sensix",
  description: "Sensitivitas Tool",
  // Base sangat penting jika nama repo kamu bukan 'username.github.io'
  base: '/ffxsensix/', 
  
  themeConfig: {
    // Hapus baris logo ini dulu jika kamu belum punya file logo.png di folder docs/public/
    // logo: '/logo.png', 
    
    siteTitle: 'FFX Sensix',
    
    nav: [
      { text: 'Home', link: '/' },
      // Pastikan folder 'docs/guide/' sudah ada isinya sebelum mengaktifkan ini
      { text: 'Guide', link: '/guide/what-is-ffx' }, 
      { text: 'Download', link: 'https://github.com/cyrust21/ffxsensix/releases' }
    ],

    sidebar: [
      {
        text: 'Panduan',
        items: [
          { text: 'Apa itu FFX Sensix?', link: '/guide/what-is-ffx' },
          { text: 'Cara Install', link: '/guide/installation' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cyrust21/ffxsensix' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present CyrusT21'
    },

    // Membantu pencarian lokal sederhana
    search: {
      provider: 'local'
    }
  }
})
