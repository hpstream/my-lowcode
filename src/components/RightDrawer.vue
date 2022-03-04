<script lang="tsx">
import { defineComponent, h, PropType, resolveComponent } from "vue";

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
    // var props = this.currentNode.renderConfig?.props;
    // // Object.keys(props);
    // var map: any = {};
    // for (let key in props) {
    //   map[key] = props[key].value;
    // }
    console.log(resolveComponent(tag + "-editor"));
    return h(resolveComponent(tag + "-editor"), { node: this.currentNode });
  }
});
</script>

<style scoped></style>
