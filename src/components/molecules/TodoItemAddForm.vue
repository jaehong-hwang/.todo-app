<template>
  <form @submit.prevent="doSubmit">
    <section class="todo-add-form" v-show="isAdding">
      <input class="todo-add-form__content" type="text" v-model="todoItem.content" ref="contentInput" placeholder="Please input todo content...">
      <NormalButton type="submit" primary>Submit</NormalButton>
      <NormalButton error @click="initTodoForm">Cancel</NormalButton>
    </section>
    <NormalButton v-show="!isAdding" @click="showTodoForm">Add</NormalButton>
  </form>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, nextTick } from 'vue'
import NormalButton from '@/components/atoms/Button/NormalButton.vue'
import { addTodoItem } from '../../todo'

export default defineComponent({
  components: {
    NormalButton
  },
  setup () {
    const contentInput: Ref<any> = ref(null)
    const isAdding = ref(false)
    const defaultTodoItem: TodoItem = {
      status : 'waiting',
      content: '',
    }

    const todoItem = ref({...defaultTodoItem})

    const showTodoForm = () => {
      isAdding.value = true
      nextTick(() => {
        contentInput.value.focus()
      })
    }

    const initTodoForm = () => {
      isAdding.value = false
      todoItem.value = {...defaultTodoItem}
    }

    const doSubmit = async () => {
      await addTodoItem(todoItem.value)
      initTodoForm()
    }

    return {
      isAdding,
      todoItem,
      contentInput,
      showTodoForm,
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
