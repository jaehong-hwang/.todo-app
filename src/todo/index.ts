
let directories:Array<Object> = [];
let currentDirectory = '';

export async function directoryFetch(): Promise<Array<Object>> {
  const res = await window.todo.directories()
  
  directories = []
  for (const val of res) {
    directories.push({
      value: val,
      name: val.split(/[\/\\]/).pop()
    })
  }

  return directories
}
