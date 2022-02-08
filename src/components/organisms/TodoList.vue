<template>
  <transition-group name="fade-up">
    <template
      v-for="todo in todoList"
      :key="todo.id"
    >
      <TodoItem class="todo-items" :todo="todo" v-if="editNo !== todo.id" @click="edit(todo)" />
      <TodoItemAddForm class="todo-items" :todo="todo" v-if="editNo === todo.id" @close="editInit()" />
    </template>
  </transition-group>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import TodoItem from '@/components/molecules/TodoItem.vue'
import TodoItemAddForm from '@/components/molecules/TodoItemAddForm.vue'
import { todoList } from '@/todo/index.ts'

export default defineComponent({
  setup() {
    const editNo: Ref<undefined|number> = ref(undefined)
    const edit = (todo: TodoItem) => {
      editNo.value = todo.id
    }

    const editInit = () => {
      editNo.value = undefined
    }

    return {
      todoList,
      edit,
      editInit,
      editNo
    }
  },
  components: {
    TodoItem,
    TodoItemAddForm,
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
    height:0;
  }
}
</style>
