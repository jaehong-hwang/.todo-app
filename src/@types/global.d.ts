/**
 * @author dev.jaehong
 */

interface TodoApi {
  run: Function;
}

interface Directory {
  value: string,
  name: string,
  icon?: string|Array<string>,
}

type status = 'waiting'|'working'|'done'

interface TodoItem {
  id?: number,
  status: status,
  author?: string,
  authorEmail?: string,
  content: string,
  start?: Date,
  end?: Date,
  label?: Array<string>
}

interface TodoList {
  [index: number]: TodoItem
}


interface Window {
  toggleDarkmode: Function;
  todo: TodoApi;
}