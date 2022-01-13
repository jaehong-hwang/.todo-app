<template>
  <div class="circle-background">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.circle-background {
  background: var(--black);
  width: 60px;
  height: 30px;
  padding: 3px;
  border-radius: 30px;
  cursor: pointer;
}
</style>
