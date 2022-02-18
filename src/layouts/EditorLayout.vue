<script setup lang="tsx">
import { ref } from 'vue'
import LeftDrawer from "../components/LeftDrawer.vue";
import EditorRender from "../components/EditorRender.vue";
import RightDrawer from "../components/RightDrawer.vue";

</script>

<template>
  
  <left-drawer></left-drawer>
  <editor-render></editor-render>
  <right-drawer></right-drawer>
  
 
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
