<template>
  <transition-group name="fade-up">
    <TodoItem
      class="todo-items"
      v-for="todo in todoList"
      :key="todo.id"
      :todo="todo"
    />
  </transition-group>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoItem from '@/components/molecules/TodoItem.vue'
import { currentDirectory, todoList } from '@/todo/index.ts'

export default defineComponent({
  setup() {
    return { todoList }
  },
  components: {
    TodoItem,
  }
})
</script>

<style lang="scss" scoped>
.todo-items:not(:last-child) {
  margin-bottom: 10px;
}

.fade-up {
  &-enter-active, &-leave-active {
    transition: .3s;
  }

  &-enter-from, &-leave-to {
    opacity: 0;
  }

  &-enter-from {
    transform: translateY(10px);
  }

  &-leave-to {
    transform: translateY(-10px);
  }
}
</style>
