const { TogCmd, bot } = require('../lib/')

bot(
  {
    pattern: 'tog ?(.*)',
    desc: 'Enable or Disable Cmd',
    type: 'bot',
  },
  async (message, match) => {
    const [cmd, tog] = match.split(' ')
    if (!cmd || (tog != 'off' && tog != 'on')) return await message.send('*Example :* tog ping off')
    if (cmd == 'tog') return await message.send(`Did you really want to kill me friend?`)
    await TogCmd(cmd, tog, message.id)
    await message.send(`_${cmd} ${tog == 'on' ? 'Enabled' : 'Disabled'}._`)
  }
)
