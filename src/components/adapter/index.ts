// 编辑组件
import editors from "./components/editors";
const adapter: any = {
  install(vue: any) {
    Object.keys(editors).forEach((componentName: string) => {
      // @ts-ignore
      vue.component(componentName, editors[componentName]);
    });
  }
};

export default adapter;
