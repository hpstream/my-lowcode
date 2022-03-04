const props: {
  [prop: string]: any;
} = {
  text: {
    label: "按钮文字",
    value: "value",
    editorType: "TextEditor",
    tabType: "prop"
  },
  size: {
    label: "尺寸",
    value: "default",
    editorType: "RadioEditor",
    options: ["large", "default", "small"],
    tabType: "prop"
  },
  round: {
    label: "是否为圆形按钮",
    value: false,
    editorType: "BooleanEditor",
    tabType: "prop"
  }
};
const schema: INodeData = {
  tag: "lvButton",
  label: "按钮",
  renderKey: "ElBtn",
  renderConfig: {
    attrs: {},
    listeners: {
      click: []
    },
    style: {},
    class: {},
    props: props
  },
  slots: ["bottom"],
  children: []
};
export default schema;
