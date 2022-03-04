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
      rootNode: tem,
      currentNode: tem
    };
  },
  //计算属性
  getters: {},
  actions: {
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
