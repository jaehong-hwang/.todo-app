<template>
  <div class="todo-item">
    <p class="todo-item__title">{{ todo.content }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    todo: Object
  },
})
</script>

<style lang="scss" scoped>
.todo-item {
  width: 100%;
  height: 70px;
  padding: 25px 20px;

  background: #fff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
  border-radius: 15px;

  font-family: 'noto-sans-bold';
  font-size: 14px;
  text-align: left;
  color: var(--black);

  @media (prefers-color-scheme: dark) {
    background: var(--dark);
  }
}
</style>
