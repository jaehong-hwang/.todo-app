<template>
  <p :class="{ active }">{{ value }}</p>  
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    value: String,
    active: Boolean,
  }
})
</script>

<style lang="scss" scoped>
p {
  color: var(--real-white);
  font-family: 'noto-sans-bold';
  font-size: 16px;
}
</style>
