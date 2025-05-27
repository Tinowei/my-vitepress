// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
//
import HeroSection from '../theme/components/HeroSection.vue'
import Project from './components/Project.vue'
import Skills from './components/Skills.vue'


export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...全局組件
    app.component('HeroSection', HeroSection),
    app.component('Project',Project),
    app.component('Skills',Skills)

  }
} satisfies Theme
