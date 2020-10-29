'use strict';
const electron = require('electron');
const {
  app,
  BrowserWindow,
  Menu,
  shell
} = require('electron');
const url = require('url');
const path = require('path');
const os = require('os');

// Need to be delete before post to github
require('electron-reload')(__dirname, {
  electron: require('electron')
});


let win;
let modal;

function createWindow() {
  win = new BrowserWindow({
    width: 1000,
    height: 800,
    // frame: false
  })
  win.loadFile('index.html')

  win.on('closed', () => {
    win = null
  })

// Create info modal
function openModal() {
  // Create new window
  modal = new BrowserWindow({
    width: 400,
    height: 250,
    title: 'About project',
    modal: true
  })

  // Load html to modal
  modal.loadFile('about.html');

  // Destroy modal
  modal.on('close', () => {
    modal = null;
  })
}

  // Menu
  const menu = Menu.buildFromTemplate(template);

  Menu.setApplicationMenu(menu);

}

const template = [
  {
    label: 'Options',
    submenu: [
      {
        role: 'reload'
      },
      {
        role: 'togglefullscreen'
      },
      {
        label: 'Exit',
        click() {
          console.log('clicked exit');
          app.quit();
        }
      }
    ]
  },
  {
    label: 'Menu',
    submenu: [{
        label: 'Main Paige',
        click() {
          win.loadFile('index.html')
        }
      },
      {
        label: 'Process',
        click() {
          console.log('clicked the submenu, process')
        }
      },
      {
        role: 'close'
      },
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
      {
        label: 'Github repo',
        click() {
          shell.openExternal('https://github.com/Czesiek2000/firstElectron');
        }
      },
      {
        label: 'More about',
        click() {
          openModal();
        }
      }
    ]
  }
  ];

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

if(process.env.NODE_ENV !== 'production'){
  template[0].submenu.unshift(
    {
      role: 'toggledevtools',
      accelerator:process.platform == 'darwin' ? 'Command+I' : 'F12',
      click(item, focusedWindow){
        focusedWindow.toggleDevTools();
      } 
    }
  );

}