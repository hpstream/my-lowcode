import { App } from "vue";
import LvButtom from "./LvButton/index";
export var previewData = {
  LvButtom
};
export default {
  install(app: App) {
    LvButtom.install(app);
  }
};
