<template>
  <div :class="{ active, hamberger: true }">
    <div class="line line-top"></div>
    <div class="line line-middle"></div>
    <div class="line line-bottom"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    active: Boolean
  }
})
</script>

<style lang="scss" scoped>
.hamberger {
  width: 25px;
  height: 25px;
}

.line {
  height: 2px;
  background: $black;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
}
</style>
