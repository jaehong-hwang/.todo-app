<template>
  <section class="menu">
    <Author />
    <MenuSections :menu="basicMenu" @update="directoryUpdate" />
    <MenuSections title="Projects" :menu="directories" :default="currentDirectory" @update="directoryUpdate" />
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import MenuSections from '@/components/molecules/MenuSections.vue'
import { directoryFetch, setCurrentDirectory, currentDirectory, fetchTodoList } from '@/todo/index.ts'

export default defineComponent({
  setup() {
    const basicMenu = [
      {
        value: 'inbox',
        name: 'inbox',
        icon: 'inbox'
      },
      {
        value: 'today',
        name: 'today',
        icon: 'clock'
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
    }
  },
  components: {
    MenuSections
  }
})
</script>


<style lang="scss" scoped>
.menu {
  display: block;
  background: var(--dark);
  padding: 90px 0 20px 20px;
  width: 230px;
  height: 100vh;
  filter: drop-shadow(4px 0px 15px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(15px);
  text-align: left;
  overflow: hidden;

  & > :not(:last-child) {
    margin-bottom: 10px;
  }
}
</style>vsc 