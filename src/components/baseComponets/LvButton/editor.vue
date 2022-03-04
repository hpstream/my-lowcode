<script setup lang="ts">
defineProps<{
  node: INodeData;
}>();
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
    </template>
  </div>
</template>

<style scoped></style>
