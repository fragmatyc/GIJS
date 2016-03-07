var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;

app.on('window-all-closed', function () {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', function () {
    mainWindow = new BrowserWindow({
        icon: 'images/icon.png',
        width: 316, 
        height: 439,
        toolbar: false,
        'auto-hide-menu-bar': true,
        resizable: false
    });
    
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    
    mainWindow.on('close', function () {
        mainWindow = null;
    });
});