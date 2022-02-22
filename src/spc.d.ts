declare interface INodeData {
  tag: string;
  children: INodeData[];
  label: string;
  renderKey: string;
  renderConfig: {
    attrs: {
      [attrName: string]: any;
    };
    listeners: {
      [eventType: string]: any[];
    };
    style: {};
    class: {
      [className: string]: boolean;
    };
    props: {
      [key: string]: {
        label: string;
        value: string | number;
        editorType: "RadioEditor" | "BooleanEditor" | "TextEditor";
        options: string[];
        tabType: "prop";
      };
    };
  };
  slots: string[];
}
