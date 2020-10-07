const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  notificationApi: {},

  batteryApi: {},

  fileApi: {},
});
