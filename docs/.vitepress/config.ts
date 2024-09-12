import { defineConfig } from 'vitepress'
 // @vitepress-demo-preview/plugin: 支持区块内的方式展示 demo 和示例代码
 import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
 import { fileURLToPath, URL } from 'node:url'
 // https://vitepress.dev/reference/site-config
 export default defineConfig({
   title: 'Weirdo-UI',
   description: 'A VitePress Site',
   vite: {
     resolve: {
       alias: {
         '@': fileURLToPath(new URL('../../src', import.meta.url))
       }
     }
   },
   themeConfig: {
     // https://vitepress.dev/reference/default-theme-config
     nav: [ 
       { text: '指南', link: '/guild/index' },
       { text: '组件', link: '/components/button' }
     ],
     sidebar: [
       {
         text: '基础',
         items: [
           { text: '按钮 Button', link: '/components/button' },
           { text: '布局容器 Container', link: '/components/container' },
           { text: '图标 Icon', link: 'components/icon' },
           { text: '链接 Link', link: '/components/link' },
           { text: '折叠面板 Collapse', link: '/components/collapse' }
         ]
       },
        
       
     ],
    //  socialLinks: [
    //    { icon: 'github', link: 'https://github.com/2WeirDo/weirdo-ui' },
    //    {
    //      icon: 'x',
    //      link: 'https://2weirdo.github.io/',
    //      ariaLabel: 'Blog'
    //    }
    //  ],
     logo: '/logo.png',
   },
   markdown: {
     // @vitepress-demo-preview的配置
     config(md) {
       // 支持区块内的方式展示 demo 和示例代码
       md.use(containerPreview)
       md.use(componentPreview)
     }
   },
   base: '/weirdo-ui/'  // 这里是为了后面部署到 github pages 上要用的路径
 })