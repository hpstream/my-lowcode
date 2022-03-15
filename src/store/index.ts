import { defineStore } from "pinia";

import schema from "../components/baseComponets/LvButton/schema";
var tem: INodeData = {
  tag: "div",
  children: [],
  label: "容器",
  renderKey: "box",
  renderConfig: {
    attrs: {},
    listeners: {
      click: []
    },
    style: {},
    class: {},
    props: {}
  },
  slots: []
};
export const useDataStore = defineStore({
  id: "rootNodeData",
  state: () => {
    return {
      count: 1,
      data: {} as any,
      rootNode: tem,
      currentNode: tem
    };
  },
  //计算属性
  getters: {},
  actions: {
    setdata(key: string, value: any) {
      this.data[key] = value;
    },
    setCurrentData(node: INodeData) {
      this.currentNode = node;
    },
    addNode(node: INodeData) {
      if (this.currentNode) {
        this.currentNode.children.push(node);
      }
    }
  }
});

// console.log(useDataStore());
// export const dataStore = useDataStore;
