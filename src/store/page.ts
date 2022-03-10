import { nextTick, ref } from 'vue'
import { directoryFetch, setCurrentDirectory, currentDirectory, fetchTodoList } from '@/todo'

const currentPage = ref({} as Directory)

const pageList = ref({
  'index': [
    {
      value: 'inbox',
      name: 'inbox',
      icon: 'inbox',
      global: true,
    },
    {
      value: 'today',
      name: 'today',
      icon: ['far', 'clock'],
      global: true,
    },
    {
      value: 'completed',
      name: 'completed',
      icon: 'check',
      global: true,
    },
    {
      value: 'archived',
      name: 'archived',
      icon: 'archive',
      global: true,
    },
    {
      value: 'setting',
      name: 'setting',
      icon: 'gear',
      global: true,
    }
  ],
  projects: [] as Directory[]
});

const setCurrentPage = (menu: Directory) => {
  currentPage.value = menu

  setCurrentDirectory(menu.value)
  fetchTodoList()
}

setCurrentPage(pageList.value.index[0])

directoryFetch().then((res: Directory[]) => pageList.value.projects = res)

export {
  currentPage,
  pageList,
  setCurrentPage
}