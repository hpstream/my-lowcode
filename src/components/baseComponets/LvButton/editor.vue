<script setup lang="ts">
import { watch } from "vue";
import { useDataStore } from "./../../../store/index";
import { ElMessageBox, ElMessage } from "element-plus";
defineProps<{
  node: INodeData;
}>();

// getVar
function getVar(node: any, propObj: any) {
  const dataStore = useDataStore();

  // console.log(propObj);

  ElMessageBox.prompt("请输入key", "Tip", {
    confirmButtonText: "确认",
    cancelButtonText: "取消"
  })
    .then(({ value }) => {
      // dataStore.setdata("key", propObj.value);
      watch(
        propObj,
        (newVal, oldVal) => {
          // console.log({ newVal, oldVal });
          dataStore.setdata(value, propObj.value);
        },
        {
          immediate: true
        }
      );
    })
    .catch(() => {});

  // console.log(node.renderConfig.props.text);
}
</script>

<template>
  <div v-for="(propObj, key) in node.renderConfig.props" :key="key">
    <template v-if="!propObj.noEdit && propObj.tabType == 'prop'">
      <component
        :label="propObj.label + ':'"
        :prop="propObj"
        :is="propObj.editorType"
        v-if="propObj.editorType"
      />
      <span @click="getVar(node, propObj)">关联</span>
    </template>
  </div>
</template>

<style scoped></style>
