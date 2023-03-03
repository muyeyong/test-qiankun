import { createApp } from 'vue'
import App from '@/App.vue'
import { registerMicroApps, runAfterFirstMounted, start } from 'qiankun'
import { apps } from '../micro.config.json'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import shared from './shared'
import 'ant-design-vue/dist/antd.css'

const isDev = process.env.NODE_ENV === 'development'
window.__MICRO_APP__NAME__ = 'main'
window.__MICRO_APPS__ = apps

async function main() {
  const app = createApp(App)

  // 挂载插件
  app.use(router)
  app.use(store)
  app.use(Antd)
  app.mount('#root')
}

function initMicroApps() {
  shared.initStore()
  const appList = apps.map((item) => {
    item.entry = isDev ? item.devEntry : item.entry
    item.props = { mainAppRouter: router, shared }
    return item
  })

  // registry micro apps
  registerMicroApps(appList, {
    beforeLoad: [
      async (app) => {
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name)
      }
    ],
    beforeMount: [
      async (app) => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
      }
    ],
    afterUnmount: [
      async (app) => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
      }
    ]
  })

  start({ sandbox: { experimentalStyleIsolation: true } })

  runAfterFirstMounted(() => {
    console.log('[MainApp] first app mounted')
  })
}
// init main application first
main().then(() => {
  initMicroApps()
})
