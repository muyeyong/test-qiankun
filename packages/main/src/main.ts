import { createApp } from 'vue'
import App from '@/App.vue'
import {
  initGlobalState,
  registerMicroApps,
  runAfterFirstMounted,
  start,
} from 'qiankun';
import { apps } from '../micro.config.json';

const isDev = process.env.NODE_ENV === 'development';

async function main() {
  // Start mock server
  // if (import.meta.env.DEV || import.meta.env.VITE_IS_VERCEL) {
  // }
  const app = createApp(App);

  // 挂载插件

  app.mount('#root');

}


  function initMicroApps() {
    const appList = apps.map((item) => {
        item.entry = isDev ? item.devEntry : item.entry;
        return item;
    });

    // registry micro apps
    registerMicroApps(appList, {
        beforeLoad: [
            async (app) => {
                console.log(
                    '[LifeCycle] before load %c%s',
                    'color: green;',
                    app.name,
                );
            },
        ],
        beforeMount: [
            async (app) => {
                console.log(
                    '[LifeCycle] before mount %c%s',
                    'color: green;',
                    app.name,
                );
            },
        ],
        afterUnmount: [
            async (app) => {
                console.log(
                    '[LifeCycle] after unmount %c%s',
                    'color: green;',
                    app.name,
                );
            },
        ],
    });

    // init global state for micro frontends
    const { onGlobalStateChange, setGlobalState } = initGlobalState({
        user: 'qiankun',
    });

    onGlobalStateChange((value, prev) =>
        console.log('[onGlobalStateChange - master]:', value, prev),
    );

    setGlobalState({
        ignore: 'master',
        user: {
            name: 'master',
        },
    });

    start({ sandbox: { experimentalStyleIsolation: true } });

    runAfterFirstMounted(() => {
        console.log('[MainApp] first app mounted');
    });
}
// init main application first
main().then(() => {
    initMicroApps();
});
