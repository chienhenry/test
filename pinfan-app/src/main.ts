/*
 * 文件名: main.ts
 * 描述: 拼饭微信小程序入口文件
 */
import { createSSRApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

export function createApp() {
  const app = createSSRApp(App);
  app.use(createPinia());
  return {
    app,
  };
}