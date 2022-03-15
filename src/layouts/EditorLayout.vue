<script setup lang="ts">
import { ref } from "vue";
import LeftDrawer from "../components/LeftDrawer.vue";
import EditorRender from "../components/EditorRender.vue";
import RightDrawer from "../components/RightDrawer.vue";
import { useDataStore } from "./../store/index";
// import { storeToRefs } from "pinia";
const dataStore = useDataStore();
</script>

<template>
  <div class="flex">
    <div class="w-1/5">
      <left-drawer />
    </div>
    <div class="w-3/5">
      {{ dataStore.data }}
      <editor-render :currentNode="dataStore.rootNode"></editor-render>
    </div>
    <div class="w-1/5">
      <right-drawer :currentNode="dataStore.currentNode" />
    </div>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
