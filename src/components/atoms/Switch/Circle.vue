<template>
  <div class="circle">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.circle {
  background: var(--white);
  width: 24px;
  height: 24px;
  border-radius: 100%;
  transition: margin .3s;

  @media (prefers-color-scheme: dark) {
    margin-left: 30px;
  }
}
</style>
