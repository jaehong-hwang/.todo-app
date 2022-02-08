// electron/preload.js
const {ipcRenderer, contextBridge} = require('electron');
const run_script = require('./command.ts');

contextBridge.exposeInMainWorld('toggleDarkmode', () => ipcRenderer.invoke('dark-mode:toggle'))

contextBridge.exposeInMainWorld(
  'todo', {
    run: async (command, options) => {
      if (!options) {
        options = []
      }

      console.log('./todo', [command, ...options, '--get-json'])
      const res = await run_script('./todo', [command, ...options, '--get-json'])
      return JSON.parse(String(res))
    }
  }
)

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
})
