const { app, BrowserWindow } = require('electron');
var path = require('path');

function createWindow () {

  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true
    },
    icon: path.join(__dirname, 'src/logo.png')
  })

  win.loadFile('./src/index.html')

}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {

  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
