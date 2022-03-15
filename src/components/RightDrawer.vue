<script lang="tsx">
import { defineComponent, h, PropType, resolveComponent } from "vue";
import { useDataStore } from "./../store/index";
// import { storeToRefs } from "pinia";

// defineProps<{ currentNode: INodeData }>();

export default defineComponent({
  props: {
    currentNode: {
      type: Object as PropType<INodeData>,
      required: true
    }
  },
  render() {
    var tag = this.currentNode.tag;
    const dataStore = useDataStore();
    // var props = this.currentNode.renderConfig?.props;
    // // Object.keys(props);
    // var map: any = {};
    // for (let key in props) {
    //   map[key] = props[key].value;
    // }
    console.log(JSON.stringify(dataStore.data));
    return h("div", {}, [
      h(resolveComponent(tag + "-editor"), { node: this.currentNode }),
      h("div", {}, JSON.stringify(dataStore.data))
    ]);
  }
});
</script>

<style scoped></style>
