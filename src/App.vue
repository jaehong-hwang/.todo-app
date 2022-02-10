<template>
  <div id="wrap">
    <Menu />
    <section id="app-wrap" :class="{ 'menu-opened': menuOpened }">
      <Header/>
      <section id="app-body">
        <TodoList />
        <TodoItemAddForm v-show="isAdding" @close="isAdding = false" id="todo-item-form" />
        <NormalButton v-show="!isAdding" @click="isAdding = true">Add</NormalButton>
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRef } from 'vue'
import Header from '@/components/organisms/Header.vue'
import Menu from '@/components/organisms/Menu.vue'
import TodoList from '@/components/organisms/TodoList.vue'

import { fetchTodoList } from '@/todo/index.ts'
import TodoItemAddForm from './components/molecules/TodoItemAddForm.vue'
import NormalButton from '@/components/atoms/Button/NormalButton.vue'

export default defineComponent({
  setup() {
    const isAdding = ref(false)

    fetchTodoList()

    return {
      isAdding,
    }
  },
  components: {
    Header,
    Menu,
    TodoList,
    TodoItemAddForm,
    NormalButton,
  },
})
</script>

<style lang="scss">
@import '@/assets/scss/fonts.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: color, background .3s;
}

html, body {
  width: 100%;
  height: 100%;
}

#app {
  font-family: 'noto-sans';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  background: var(--white);
  width: 100%;
  height: 100%;
}

#wrap {
  display: flex;
  height: 100%;

  #app-wrap {
    flex: 1;
    padding: 0 42px;
    overflow: scroll;
    padding-bottom: 20px;
  }

  #app-body {
    padding: 50px 0 0;
  }
}

#todo-item-form {
  margin-top: 27px;
}
</style>
