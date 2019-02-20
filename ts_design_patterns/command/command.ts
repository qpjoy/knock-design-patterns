import { ICommand } from './icommand'
// import { sleep } from '../observer'
import {ILogCommandParams, LogCommand} from "./log-command";

async function sleep(duration: number): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  })
}

export class CommandWorker {
  private _commands: ICommand[] = []
  private readonly _interval: number

  constructor(interval: number) {
    this._interval = interval
  }

  registerCommand(command: ICommand) {
    console.log('Register command')
    if (!this._commands.find(c => c === command)) {
      this._commands.push(command)
    }
  }

  startWorker(): any {
    setInterval(() => {
      const command = this._commands.pop()
      if (command) {
        command.execute()
      }
    }, this._interval)
  }
}

async function testCommandPatter(): Promise<any> {
  // Run the command worker every 5 seconds
  const commandWorker = new CommandWorker(5000)
  while (true) {
    try {
      await sleep(1000)
      const b: any = 100
      b()
    } catch (error) {
      const params: ILogCommandParams = {
        title: 'Woops',
        body: 'Plase try again later',
        error,
        filename: './ts/logs/error_cmd.log'
      }
      commandWorker.registerCommand(new LogCommand(params))
    }
  }
}

testCommandPatter()
