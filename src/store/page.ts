import { ref } from 'vue'
import { directoryFetch, setCurrentDirectory, currentDirectory, fetchTodoList } from '@/todo'

const pageTitle = ref('')

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
  projects: [] as Array<Directory>
});

const setCurrentPage = (val: string) => {
  setCurrentDirectory(val)
  fetchTodoList()
}

directoryFetch().then((res: Array<Directory>) => pageList.value.projects = res)

export {
  pageTitle,
  pageList,
  setCurrentPage
}