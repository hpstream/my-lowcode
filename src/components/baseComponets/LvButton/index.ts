import { App } from "vue";
import LvButtom from "./component.vue";
import editor from "./editor.vue";
import schema from "./schema";
export default {
  schema,
  preview: "https://s.momocdn.com/s1/u/cfbdbibif/spacey/button_1.png",
  text: "按钮",
  install(app: App) {
    // console.log(schema.tag, LvButtom);
    app.component(schema.tag, LvButtom);
    app.component(schema.tag + "Editor", editor);
  }
};
