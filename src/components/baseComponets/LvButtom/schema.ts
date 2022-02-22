
const props: {
  [prop: string]: any;
} = {
  text: {
    label: "按钮文字",
    value: "按钮",
    editorType: "TextEditor",
    tabType: "prop",
  },
  size: {
    label: "尺寸",
    value: "default",
    editorType: "RadioEditor",
    options: ["large", "default", "small"],
    tabType: "prop",
  },
  round: {
    label: "是否为圆形按钮",
    value: false,
    editorType: "BooleanEditor",
    tabType: "prop",
  },
};
const schema: INodeData = {
  tag: "lv-button",
  label: "按钮",
  renderKey: "ElBtn",
  renderConfig: {
    attrs: {},
    listeners: {
      click: [],
    },
    style: {},
    class: {},
    props: {},
  },
  slots: ["bottom"],
  children: [],
};
export default schema;
