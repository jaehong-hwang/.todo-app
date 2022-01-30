/**
 * @author dev.jaehong
 */

interface TodoApi {
  run: Function;
}

interface Directory {
  value: string,
  name: string,
}

interface TodoItem {
  id: number,
  status: string,
  author: string,
  authorEmail: string,
  content: string,
  start: Date,
  end: Date,
  label?: Array<string>
}

interface TodoList {
  [index: number]: TodoItem
}


interface Window {
  toggleDarkmode: Function;
  todo: TodoApi;
}