import InvalidEnvError from './error/InvalidEnvError'

export const checkEnv = () => {
  const configs = Object.values(config())
  const check = (cfg) => {
    cfg.forEach(c => {
      if (!c) throw new InvalidEnvError('.env file is not valid. Check src/configure.ts')
      if (typeof c === 'object' && c !== null) check(Object.values(c))
    })
  }

  check(configs)
}

const config = () => ({
  TOKEN: process.env.BOT_TOKEN,
  prefix: process.env.BOT_PREFIX,
})

export default config