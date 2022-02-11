import { ref } from 'vue'
import { directoryFetch, setCurrentDirectory, currentDirectory, fetchTodoList } from '@/todo'

const currentPage = ref({} as Directory)

const pageList = ref({
  'index': [
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
  ],
  projects: [] as Directory[]
});

const setCurrentPage = (menu: Directory) => {
  setCurrentDirectory(menu.value)
  fetchTodoList()

  currentPage.value = menu
}

directoryFetch().then((res: Directory[]) => pageList.value.projects = res)

export {
  currentPage,
  pageList,
  setCurrentPage
}