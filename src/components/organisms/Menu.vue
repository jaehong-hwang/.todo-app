<template>
  <section class="menu">
    <MenuSections title="Directories" :menu="directories" :default="currentDirectory" @update="directoryUpdate" />
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import MenuSections from '@/components/molecules/MenuSections.vue'
import { directoryFetch, setCurrentDirectory, currentDirectory, fetchTodoList } from '@/todo/index.ts'

export default defineComponent({
  setup() {
    const directoryUpdate = (val: String) => {
      setCurrentDirectory(val)
      fetchTodoList()
    }

    const directories = ref([{}])
    directoryFetch().then((res: Array<Object>) => directories.value = res)

    return {
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
  padding: 90px 0 20px 42px;
  width: 343px;
  height: 100vh;
  filter: drop-shadow(4px 0px 15px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(15px);
  text-align: left;
  overflow: hidden;
}
</style>vsc 