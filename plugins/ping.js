const { bot } = require('../lib/')

bot(
  {
    pattern: 'ping ?(.*)',
    desc: 'To check ping',
    type: 'misc',
  },
  async (message, match) => {
    const start = new Date().getTime()
    await message.send('```Gabby is checking ping```')
    const end = new Date().getTime()
    return await message.send('*Pong! here is my speed, friend!*\n ```' + (end - start) + '``` *ms*')
  }
)
