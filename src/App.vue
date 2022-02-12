<template>
  <div id="wrap">
    <Menu />
    <section id="app-wrap">
      <Header/>
      <section id="app-body">
        <h2 id="app-body-title">{{ currentPage.name }}</h2>
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

import { currentPage } from '@/store/page.ts'
import TodoItemAddForm from './components/molecules/TodoItemAddForm.vue'
import NormalButton from '@/components/atoms/Button/NormalButton.vue'

export default defineComponent({
  setup() {
    const isAdding = ref(false)

    return {
      isAdding,
      currentPage,
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
    overflow: scroll;
    padding: 0 15px 20px 30px;
  }

  #app-body {
    padding: 40px 0 0;
    text-align: left;

    &-title {
      font-size: 28px;
      font-family: 'noto-sans-bold';
      margin-bottom: 38px;
    }
  }
}

#todo-item-form {
  margin-top: 27px;
}
</style>
