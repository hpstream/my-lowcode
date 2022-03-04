import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import baseComponets from "./components/baseComponets/index";
import adapter from "./components/adapter/index";
import "virtual:windi.css";
import "@/request";
import { createPinia } from "pinia";
createApp(App)
  .use(ElementPlus)
  .use(baseComponets)
  .use(adapter)
  .use(createPinia())
  .mount("#app");
