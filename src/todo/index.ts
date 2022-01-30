import { directory, todo } from './types'

let directories:Array<directory> = [];
const directoryFetch = async (): Promise<Array<directory>> => {
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

let todoList:Array<todo> = [];
const fetchTodoList = async (): Promise<void> => {
  const res = await window.todo.run('list', ['--directory='+currentDirectory])
  todoList = res;
}

export {
  directoryFetch,
  directories,
  setCurrentDirectory,
  currentDirectory,

  fetchTodoList,
  todoList,
}
