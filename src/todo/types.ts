export interface directory {
  value: string,
  name: string,
}

export interface todo {
  id: number,
  status: string,
  author: string,
  authorEmail: string,
  content: string,
  start: Date,
  end: Date,
  label: Array<string>
}
