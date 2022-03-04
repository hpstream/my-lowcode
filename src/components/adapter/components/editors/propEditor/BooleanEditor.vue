<template>
  <el-row :gutter="20">
    <div class="w-full p-1 text-gray-400">{{ prop.label }}</div>
    <div>
      <el-switch
        v-model="prop.value"
        active-color="#13ce66"
        inactive-color="#ff4949"
        :active-value="true"
        :inactive-value="false"
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
