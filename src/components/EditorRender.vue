<script lang="tsx">
import { defineComponent, h, PropType, resolveComponent, VNode } from "vue";
import { useDataStore } from "./../store/index";
// const dataStore = useDataStore();
// defineProps<{ currentNode: INodeData }>();

function renderLoop(currentNode: INodeData): VNode {
  var tag = currentNode.tag;
  var children = currentNode.children;
  var props = currentNode.renderConfig?.props;
  var map: any = {};
  for (let key in props) {
    map[key] = props[key].value;
    map["onClick"] = () => {
      const dataStore = useDataStore();
      dataStore.setCurrentData(currentNode);
    };
  }
  return h(
    resolveComponent(tag),
    map,
    children.map((child) => renderLoop(child))
  );
}

export default defineComponent({
  props: {
    currentNode: {
      type: Object as PropType<INodeData>,
      required: true
    }
  },

  render() {
    // var tag = this.currentNode.tag;
    // var children = this.currentNode.children;
    // var props = this.currentNode.renderConfig?.props;
    // // Object.keys(props);
    // var map: any = {};
    // for (let key in props) {
    //   map[key] = props[key].value;
    // }
    return renderLoop(this.currentNode);
  }
});
</script>

<style scoped></style>
