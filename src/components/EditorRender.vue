<script setup lang="tsx">

import { ref } from 'vue'
// import INodeData from './../spc.d.ts'



defineProps<{ currentNode: INodeData}>()

// const count = ref(0)

</script>

<template>
  
    <component :is='currentNode.tag'>{{currentNode.slots[0]}}</component>
   
    <editor-render :node="child" v-for="(child,i) of currentNode.children" :key="i"></editor-render>
    
    
 
</template>

<style scoped>

</style>