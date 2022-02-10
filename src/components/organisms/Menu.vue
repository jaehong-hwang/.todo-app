<template>
  <section :class="{ 'menu-wrapper': true, 'opened': menuOpened }">
    <div class="menu-close" v-if="menuOpened" @click="menuOpened = false">
      <fa-icon icon="angles-left" />
    </div>
    <div class="menu">
      <div class="menu-open" v-if="!menuOpened" @click="menuOpened = true">
        <fa-icon icon="angles-right" />
      </div>
      <Author />
      <MenuSections :menu="basicMenu" @update="directoryUpdate" />
      <MenuSections title="Projects" :menu="directories" :default="currentDirectory" @update="directoryUpdate" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, toRef } from 'vue'
import MenuSections from '@/components/molecules/MenuSections.vue'
import { directoryFetch, setCurrentDirectory, currentDirectory, fetchTodoList } from '@/todo/index.ts'
import store from '@/store/index.ts'

export default defineComponent({
  setup() {
    const menuOpened = toRef(store.value, 'menuOpened')
    const basicMenu = [
      {
        value: 'inbox',
        name: 'inbox',
        icon: 'inbox'
      },
      {
        value: 'today',
        name: 'today',
        icon: ['far', 'clock']
      },
      {
        value: 'completed',
        name: 'completed',
        icon: 'check'
      },
      {
        value: 'archived',
        name: 'archived',
        icon: 'archive'
      },
      {
        value: 'setting',
        name: 'setting',
        icon: 'gear'
      }
    ] as Array<Directory>;

    const directoryUpdate = (val: String) => {
      setCurrentDirectory(val)
      fetchTodoList()
    }

    const directories = ref([{} as Directory])
    directoryFetch().then((res: Array<Directory>) => directories.value = res)

    return {
      basicMenu,
      directories,
      directoryUpdate,
      currentDirectory,
      menuOpened,
    }
  },
  components: {
    MenuSections
  }
})
</script>


<style lang="scss" scoped>
.menu {
  width: 230px;

  &-wrapper {
    position: relative;
    display: block;
    background: var(--dark);
    padding: 36px 0 0;
    width: 75px;
    height: 100vh;
    backdrop-filter: blur(15px);
    text-align: left;
    overflow: hidden;
    transition: .3s;

    &.opened {
      width: 230px;
      filter: drop-shadow(4px 0px 10px rgba(0, 0, 0, 0.1));
    }
  }

  & > :not(:last-child) {
    margin-bottom: 10px;
  }

  &-open {
    color: var(--black);
    opacity: 0.7;
    transition: .3s;

    &:hover {
      opacity: 1;
    }
  }

  &-close {
    position: absolute;
    color: var(--black);
    opacity: 0;
    transition: .3s;
    top: 5px;
    right: 10px;
    cursor: pointer;
  }

  &-wrapper:hover &-close {
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }
}
</style>vsc 