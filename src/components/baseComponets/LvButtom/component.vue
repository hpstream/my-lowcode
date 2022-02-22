<script setup lang="tsx">
// import { ref } from "vue";

defineProps<{ text: string; size: string; round: boolean }>();
</script>

<template>
  <el-button :size="size" :round="round">{{ text }}</el-button>
</template>

<style scoped></style>
