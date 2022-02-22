import { App } from "vue";
import LvButtom from "./LvButtom/component.vue";
import schema from './LvButtom/schema';
export default {
  install(app: App) {
    app.component(schema.tag,LvButtom);
  },
};
