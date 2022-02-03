<template>
  <p class="todo-item__title">
    {{ title }}
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: String,
  },
})
</script>


<style lang="scss" scoped>
p {
  font-family: 'noto-sans-bold';
  font-size: 14px;
  text-align: left;
  color: var(--black);
}
</style>
