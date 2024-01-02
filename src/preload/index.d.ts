declare global {
  interface Window {
    ipcRenderer: {
      // sendMsg(msg: string): Promise<string>
      // onReplyMsg(cb: (msg: string) => any): void
      send(channel: string, data: string): Promise<string>
      on(channel: string, func: (event: Electron.IpcRendererEvent, ...args: any[]) => void): void
    }
  }
}

export { }

