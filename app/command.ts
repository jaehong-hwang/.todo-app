//Uses node.js process manager
const electron = require('electron')
const child_process = require('child_process')
const dialog = electron.dialog

// This function will output the lines from the script 
// and will return the full combined output
// as well as exit code when it's done (using the callback).
module.exports = function run_script(command, args) {
  return new Promise((resolve, reject) => {
    var child = child_process.spawn(command, args, {
      encoding: 'utf8',
      shell: true
    })
    // You can also use a variable to save the output for when the script closes later
    child.on('error', (error) => {
      reject({ message: error })
    })

    child.stdout.setEncoding('utf8')
    child.stdout.on('data', (data) => {
      //Here is the output
      data=data.toString()
      resolve(data)
    })

    child.stderr.setEncoding('utf8')
    child.stderr.on('data', (data) => {
      reject({ message: 'error script', code: data })
    })
  })
}
