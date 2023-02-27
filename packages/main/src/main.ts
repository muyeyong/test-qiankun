import { createApp } from 'vue'
import App from '@/App.vue'
import  '@/assets/index.scss';
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun';
import microApps from "./micro-app";
const app = createApp(App).mount('#app')


// 定义loader方法，loading改变时，将变量赋值给App.vue的data中的isLoading
// function loader(loading: any) {
//   if (instance.isLoading) {
//     instance.isLoading = loading
//   }
// }
// 给子应用配置加上loader方法
// const apps = microApps.map(item => {
//     return {
//       ...item,
//     //   loader
//     };
//   });

  registerMicroApps([...microApps]);
  
  start();
