'use strict';
const electron = require('electron');
const {app, BrowserWindow, Menu} = require('electron');
const url = require('url');
const path = require('path');
const operativeSystemModule = require('os');
const os = require('os');

// Need to be delete before post to github
require('electron-reload')(__dirname, {
  electron: require('electron')
});


let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1000,
    height: 800,
    // frame: false
  })
  win.loadFile('index.html')
  // Open devTools
  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  } )

  // Menu
  const menu = Menu.buildFromTemplate ([
    {
      label: 'Options',
      submenu: [
        {role: 'reload'},
        {role: 'toggledevtools'},
        {role: 'togglefullscreen'},
        {
          label: 'Exit',
          click(){
            console.log('clicked exit');
            app.quit();
          }
        }
      ]
    },
    {
      label: 'Menu',
      submenu: [
        {label: 'Main Paige',
          click() {
            win.loadFile('index.html')
        }
        },
        {
          label: 'Process',
          click(){
            console.log('clicked the submenu, process')
          }
        },
        {role: 'close'},
      ]
    },
    {
      label: 'Info',
      submenu: [{
        label: 'Info page',
        click() {
          win.loadFile('info.html')
        }
      },
      {label: 'Github repo'},
      {label: 'More about project'}
    ]
    }
  ])
  Menu.setApplicationMenu(menu);
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('active', () => {
  if (win === null) {
    createWindow()
  }
})