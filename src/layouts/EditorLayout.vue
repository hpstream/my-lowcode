<script setup lang="ts">
import { ref } from 'vue'
import LeftDrawer from "../components/LeftDrawer.vue";
import EditorRender from "../components/EditorRender.vue";
import RightDrawer from "../components/RightDrawer.vue";
import schema from "./../components/baseComponets/LvButtom/schema";
var currentNode:INodeData= schema;

</script>

<template>
  
  <left-drawer></left-drawer>
  <editor-render :currentNode='currentNode'></editor-render>
  <right-drawer :currentNode='currentNode'></right-drawer>
  
 
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
