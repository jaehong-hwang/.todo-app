let directories:Array<directory> = [];
const directoryFetch = async (): Promise<Array<directory>> => {
  const res = await window.todo.directories()
  
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

export {
  directoryFetch,
  directories,
  setCurrentDirectory,
  currentDirectory,
}
