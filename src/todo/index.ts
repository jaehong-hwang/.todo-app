import { Ref, ref, nextTick } from 'vue'

let directories:Directory[] = [];
const directoryFetch = async (): Promise<Directory[]> => {
  const res = await window.todo.run('collection list')
  
  directories = []
  for (const val of res) {
    directories.push({
      value: val,
      name: val.split(/[\/\\]/).pop()
    })
  }

  if (currentDirectory === '' || currentDirectory === null) {
    setCurrentDirectory(directories[0].value);
  }

  return directories
}

let currentDirectory = localStorage.getItem('currentDirectory');
const setCurrentDirectory = (dir: string): string => {
  currentDirectory = dir
  localStorage.setItem('currentDirectory', dir)

  return currentDirectory
}

const todoList:Ref<TodoList> = ref([]);
const fetchTodoLoading = ref(false);
const fetchTodoList = async (): Promise<void> => {
  fetchTodoLoading.value = true
  todoList.value = [];

  const res = await window.todo.run('list', ['--directory='+currentDirectory])
  todoList.value = res;
  fetchTodoLoading.value = false
}

const addTodoItem = async (item: TodoItem): Promise<void> => {
  if (item.id !== undefined) {
    await window.todo.run('update', ['--id='+item.id, item.content, '--directory='+currentDirectory])
  } else {
    await window.todo.run('add', ['"'+item.content+'"', '--directory='+currentDirectory])
  }
}

const deleteTodoItem = async (item: TodoItem): Promise<void> => {
  await window.todo.run('remove', ['--id='+item.id, '--directory='+currentDirectory])
}

export {
  directoryFetch,
  directories,
  setCurrentDirectory,
  currentDirectory,

  fetchTodoList,
  fetchTodoLoading,
  todoList,

  addTodoItem,
  deleteTodoItem,
}
