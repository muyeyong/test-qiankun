import { createApp } from 'vue'
import type { App } from 'vue'
import { renderWithQiankun, qiankunWindow, QiankunProps } from 'vite-plugin-qiankun/dist/helper'
import './style.css'
import Root from './App.vue'
import { router, history } from './router'
import { Router } from 'vue-router'
import store from './store'
import SharedModule from './shared'
import useSharedStore from './store/shared'

interface MountProps {
  name?: string
  container?: any
  onGlobalStateChange?: any
  setGlobalState?: any
  mainAppRouter?: Router
  shared?: any
  actions?: any
}

let app: App | null = null
function render(props: MountProps = {}) {
  const { container, mainAppRouter, shared } = props

  app = createApp(Root)

  app.use(store)

  app.use(router)

  // TODO 全局变量需要做ts的提示
  if (mainAppRouter) {
    app.config.globalProperties.$mainAppRouter = mainAppRouter
  }
  if (shared) {
    const sharedStore = useSharedStore()
    SharedModule.overloadShared(shared)
    sharedStore.init()
  }
  const target: HTMLElement = container
    ? container.querySelector('#app')
    : document.querySelector('#app')
  app.mount(target)
}

renderWithQiankun({
  bootstrap() {
    console.log('[vue] vue app bootstraped')
  },
  mount(props: MountProps) {
    console.log('[vue] props from main framework', props)
    render(props)
  },
  update: function (props: QiankunProps): void | Promise<void> {
    console.log('props', props)
    throw new Error('Function not implemented.')
  },
  unmount() {
    if (app) {
      app.unmount()
      app = null
      history.destroy()
    }
  }
})

// render when run alone
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  console.log('独自运行')
  render()
} else {
  console.log('qiankun env...')
}
