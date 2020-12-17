import { Client } from 'discord.js'
import onMessage from './event/onMessage'
import config from '../configure'

class DeStock extends Client {
  login(token?: string): any {
    let t: string | undefined = token
    if (!token) t = config().token

    this.on('ready', () => {
      console.log(`${this.user?.tag} is ready!`)
      this.user?.setActivity(`${config().prefix}help`)
    })

    this.on('message', msg => onMessage(this, msg))

    super.login(t)
  }
}

export default DeStock
