import { Ref, ref } from 'vue'

let directories:Array<Directory> = [];
const directoryFetch = async (): Promise<Array<Directory>> => {
  const res = await window.todo.run('directories')
  
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

let todoList:Ref<TodoList> = ref([]);
const fetchTodoList = async (): Promise<void> => {
  const res = await window.todo.run('list', ['--directory='+currentDirectory])
  todoList.value = res;
}

const addTodoItem = async (item: TodoItem): Promise<void> => {
  await window.todo.run('add', [item.content])
}

export {
  directoryFetch,
  directories,
  setCurrentDirectory,
  currentDirectory,

  fetchTodoList,
  todoList,

  addTodoItem,
}
