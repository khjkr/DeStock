import { Client } from 'discord.js'
import config from '../configure';

class DeStock extends Client {
  login(token?: string): any {
    let t: string | undefined = token
    if (!token) t = config().TOKEN

    this.on('ready', () => {
      console.log(`${this.user?.tag} is ready!`)
      this.user?.setActivity(`${config().prefix}help`)
    })

    this.on('message', (msg) => {
      if (msg.content.startsWith(config().prefix + 'ping')) {
        msg.channel.send('Pong!')
      }
    })

    super.login(t)
  }
}

export default DeStock