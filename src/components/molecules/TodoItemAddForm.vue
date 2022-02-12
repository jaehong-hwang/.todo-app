<template>
  <form @submit.prevent="doSubmit">
    <section class="todo-add-form">
      <input class="todo-add-form__content" type="text" v-model="todoItem.content" ref="contentInput" placeholder="Please input todo content...">
      <NormalButton type="submit" primary :loading="loading">Submit</NormalButton>
      <NormalButton v-if="todo.id !== undefined" error @click="deleteItem">Delete</NormalButton>
      <NormalButton @click="initTodoForm">Cancel</NormalButton>
    </section>
  </form>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, onMounted, PropType, nextTick } from 'vue'
import NormalButton from '@/components/atoms/Button/NormalButton.vue'
import { addTodoItem, deleteTodoItem, fetchTodoList } from '@/todo/index.ts'

export default defineComponent({
  components: {
    NormalButton
  },
  props: {
    todo: {
      type: Object as PropType<TodoItem>,
      default: (): TodoItem => {
        return {
          status : 'waiting',
          content: '',
        } as TodoItem
      }
    }
  },
  setup (props, context) {
    const loading = ref(false)
    const contentInput: Ref<any> = ref(null)
    const todoItem: Ref<TodoItem> = ref({...props.todo} as TodoItem)

    const initTodoForm = () => {
      todoItem.value = {...props.todo}
      context.emit('close')
    }

    const deleteItem = async () => {
      await deleteTodoItem(todoItem.value)
      await fetchTodoList()
      initTodoForm()
    }

    const doSubmit = async () => {
      loading.value = true
      await addTodoItem(todoItem.value)
      await fetchTodoList()
      loading.value = false
      initTodoForm()
    }

    onMounted(() => {
      contentInput.value.focus()
    })

    return {
      loading,
      todoItem,
      contentInput,
      deleteItem,
      initTodoForm,
      doSubmit,
    }
  }
})
</script>

<style lang="scss" scoped>
.todo-add-form {
  border: 2px solid var(--black);
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  overflow: hidden;
  padding: 25px 20px;
  background: #fff;

  display: flex;

  @media (prefers-color-scheme: dark) {
    background: var(--dark);
  }

  &__content {
    border: 0;
    background: transparent;
    outline: none !important;

    flex: 1;

    font-family: 'noto-sans-bold';
    font-size: 14px;
    color: var(--black);
  }

  > * {
    margin-right: 15px;
  }
}
</style>
