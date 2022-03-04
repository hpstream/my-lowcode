<template>
  <el-row :gutter="20">
    <span class="w-full p-1 text-gray-400">{{ prop.label }}</span>
    <div>
      <el-input
        v-model="prop.value"
        placeholder="请输入按钮文案"
        class="w-50 m-2"
      />
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
