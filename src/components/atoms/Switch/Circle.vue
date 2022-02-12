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
  height: 100%;
  border-radius: 100%;
}
</style>
