import dotenv from 'dotenv'
import { checkEnv } from './configure';
import DeStock from './bot/DeStock'

dotenv.config()
checkEnv()

const client = new DeStock()
client.login()
