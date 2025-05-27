import { defineConfig } from 'vitepress' 

// https://vitepress.dev/reference/site-config
export default defineConfig({

  title: "Tino's Vitefolio",
  base: '/my-vitepress/',
  description: "A VitePress Site",
  head:[
    ['link',{ rel: 'stylesheet', href: './theme/style.css' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Notes', 
        link: '/notes/Javascript/conception' }
    ],

    sidebar: [
      {
        text: 'Javascript',
        collapsed: true,
          items: [
            { text: '概念', link: '/notes/Javascript/conception' },
            {
              text:'變數規則',link:'/notes/Javascript/variable_rules'
            },
            {
              text:'9種資料型別',link:'/notes/Javascript/data_types'
            },
            {
              text:'運算子',link:'/notes/Javascript/operators'
            },
            {
              text:'Array',link:'/notes/Javascript/array'
            },
            {
              text:'Object',link:'/notes/Javascript/object'
            },
            {
              'text':'addEventListener()',link:'/notes/Javascript/addEventListener'
            },
            {
              text:'好的Fetch寫法',link:'/notes/Javascript/how_to_use_fetch'
            }
          ]
      },
      {
        text:'CSharp',
        collapsed:true,
        items:[
          { text:'Linq', link:'/notes/CSharp/Linq.md' },
          { text:'sql查詢如何影響效率?',link:'/notes/CSharp/IEnumerable_IQueryable.md'},
        ]
      },
      {
        text: 'SQL',
        collapsed: true,
          items: [
            { text: 'SQL概述', link: '/notes/SQL/basic' },
            { text: 'JOIN', link: '/notes/SQL/join' },
            { text: 'char  / varchar /  nvarvchar', link: '/notes/SQL/char' },
            { text: '子查詢', link: '/notes/SQL/subquery' },

          ]
      },
      {
        text:'ORM',
        collapsed:true,
        items:[
          {text:'Dapper',link:'/notes/ORM/dapper/'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Tinowei/my-vitepress' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 Tino'
    }
  },
  
})
