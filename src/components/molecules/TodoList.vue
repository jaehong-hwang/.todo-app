<template>
  <template v-for="todo in todoList" :key="todo.id">
    <TodoItem :todo="todo" />
  </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoItem from '@/components/atoms/TodoItem.vue'
import { todoList } from '@/todo/index.ts'

export default defineComponent({
  setup() {
    return { todoList }
  },
  components: {
    TodoItem,
  }
})
</script>

