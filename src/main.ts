import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import baseComponets from "./components/baseComponets/index";
import "@/request";
createApp(App).use(ElementPlus).use(baseComponets).mount("#app");
