import { Message } from 'discord.js'
import DeStock from '../DeStock'
import config from '../../configure'

function onMessage(client: DeStock, msg: Message) {
  const cfg: any = config()
  if (msg.author.bot) return
  if (msg.channel.type == 'dm') return
  if (!msg.content.startsWith(cfg.prefix)) return

  if (msg.content.startsWith(cfg.prefix + 'ping')) {
    console.log(`${msg.author.id} : ${msg.content}`)
    msg.channel.send('Pong!')
  }
}

export default onMessage
