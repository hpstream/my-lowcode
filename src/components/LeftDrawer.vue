<script setup lang="tsx">
import { previewData } from "./baseComponets/index";

var previewDataList = Object.values(previewData);
type Item = typeof previewDataList extends (infer T)[] ? T : never;

import { useDataStore } from "./../store/index";

function addNode(item: Item) {
  const dataStore = useDataStore();
  if (dataStore.currentNode) {
    var tem: Item = JSON.parse(JSON.stringify(item));
    dataStore.addNode(tem.schema);
  }
}
</script>

<template>
  <div class="flex flex-wrap">
    <div
      v-for="(item, i) of previewDataList"
      class="w-1/3 p-2 cursor-pointer"
      @click="addNode(item)"
    >
      <img :src="item.preview" alt="" class="w-full" />
      <div class="text-sm text-true-gray-500 text-center mt-4">
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
