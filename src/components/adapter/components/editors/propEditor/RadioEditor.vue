<template>
  <el-row :gutter="20">
    <span class="w-full p-1 text-gray-400">{{ prop.label }}</span>
    <div>
      <el-radio
        v-model="prop.value"
        :label="item"
        size="large"
        v-for="item of prop.options"
        >{{ item }}</el-radio
      >
    </div>
  </el-row>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    prop: {
      type: Object as PropType<IPropItem>,
      required: true
    }
  }
});
</script>
