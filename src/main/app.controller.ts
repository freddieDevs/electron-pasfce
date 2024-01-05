import { Controller } from '@nestjs/common'
import { IpcHandle, Window } from '@doubleshot/nest-electron'
import { Payload } from '@nestjs/microservices'
import { type Observable, of } from 'rxjs'
import type { BrowserWindow } from 'electron'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Window() private readonly mainWin: BrowserWindow,
  ) { }

  @IpcHandle('msg')
  public handleSendMsg(@Payload() data: { username: string; password: string }): Observable<string> {
    // console.log("DATA-->", data);
    const { webContents } = this.mainWin
    const time = this.appService.getTime();
    //converting time to locale string
    const formattedTime = new Date(time).toLocaleString();
    webContents.send('reply-msg', 'this is msg from webContents.send')
    return of(`The main process received your message: username:${data.username}, password: ${data.password} at time: ${formattedTime}`);
  }
}