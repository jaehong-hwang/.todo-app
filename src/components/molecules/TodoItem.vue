<template>
  <TodoItemCard>
    <TodoItemTitle :title="todo.content" />
    <TodoItemMenu />
  </TodoItemCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoItemCard from '@/components/atoms/TodoItem/Card.vue'
import TodoItemTitle from '@/components/atoms/TodoItem/Title.vue'
import TodoItemMenu from '@/components/atoms/TodoItem/Menu.vue'

export default defineComponent({
  props: {
    todo: Object
  },
  components: {
    TodoItemCard,
    TodoItemTitle,
    TodoItemMenu,
  },
})
</script>
