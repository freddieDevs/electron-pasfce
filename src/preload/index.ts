import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld(
  'ipcRenderer',
  {
    // sendMsg: (msg: string): Promise<string> => ipcRenderer.invoke('msg', msg),
    send: (channel: string, data: { username: string; password: string }) => ipcRenderer.invoke(channel, data),
    // onReplyMsg: (cb: (msg: string) => any) => ipcRenderer.on('reply-msg', (e, msg: string) => {
    //   cb(msg)
    // }),
    on: (channel: string, func: (event: Electron.IpcRendererEvent, ...args: any[]) => void)=> ipcRenderer.on(channel, (event, ...args) => func(event, ...args)),
  },
)