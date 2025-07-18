const bot = require('../lib/events')
const {
  addSpace,
  textToStylist,
  getUptime,
  getRam,
  getDate,
  getPlatform,
} = require('../lib/')
bot.addCommand(
  {
    pattern: 'help ?(.*)',
    dontAddCommandList: true,
  },
  async (message, match, ctx) => {
    const sorted = ctx.commands.sort((a, b) => {
      if (a.name && b.name) {
        return a.name.localeCompare(b.name)
      }
      return 0
    })
    const [date, time] = getDate()
    let CMD_HELP = `ҖҖ-GGGGGGGGGGGGG-ҖҖ
ҖוGGGGGGGGGGGGGGGוҖ
▌וGGGGGGGGGGGGGGGו▐
G└┐GGGGGGGGGGGGG┌┘G
GG└┐GGGGGGGGGGG┌┘GG
GG┌┘҂҂GGGGG҂҂҂└┐GG
▌Gו҉҉҉҉▌GGG▐҉҉҉҉וG▐
ҖGו▐Җ҉-GG҂GG-ҖҖ▌וGҖ
Җ▌┘GGGGG▐Җ▌GGGGG└▐Җ
ҖҖGG҂҂▓G-Җ-G▓҂҂GGҖҖ
ҖҖ҂҉┘Җ▌GGGGG▐Җ└҉҂ҖҖ
ҖҖҖGG▐҉┬┬┬┬┬҉▌GGҖҖҖ
ҖҖҖ▌GG┬┼┼┼┼┼┬GG▐ҖҖҖ
ҖҖҖҖ҂G└┴┴┴┴┴┘G҂ҖҖҖҖ
Җ¥ҖҖҖ҂GGGGGGG҂ҖҖ¥ҖҖ

╭━▬G▬G▬ ✦G✦ ▬G▬G▬҉➤
HELLO THERE : ${message.pushName}
╰G▬G▬ ✦G✦ ▬G▬G▬҉➤

TIME : ${time}
MY PING✧IS 0.0001MS
DAY: ${date.toLocaleString('en', { weekday: 'long' })}
PLUGINS PRE INSTALLED : ${ctx.pluginsCount}
OWNER✧+254112842772
PLATFORM : ${getPlatform()}
PREFIX✧MULTIPREFIX✧ CURRENT: ${ctx.PREFIX}
VPS RAM : ${getRam()}
MODE✧PRIVATE

UPTIME AND RUNTIME : ${getUptime('t')}
DATE : ${date.toLocaleDateString('hi')}

╭━━•G⏤͟͟͞GABBYZ MENU PANEL҉➤G•━━╮
┃ GABBYZ JUSTICE IS HERE
┃҉ ⏤͟͟͞GABBYZ MENU PANEL ҉҉➤ ↶↷
╰━━•Gꪶ ཻུ۪۪G⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪G⸙G•━━͙✩̣̣̣̣
 ▬G▬G▬ ✦✧✦ ▬G▬G▬
╭━━•G〘 HERE IS MY MENU 〙
Җ GABBY
Җ BUGMENU 
Җ FUNMENU 
Җ MAINMENU 
Җ VOICEMENU 
Җ GROUPMENU 
Җ OWNERMENU 
Җ ISLAMICMENU 
Җ SEARCHMENU 
Җ EPHOTOMENU 
Җ RANDOMMENU 
Җ TEXTPROMENU 
Җ PRIMBONMENU 
Җ CONVERTMENU 
Җ WEBZONEMENU
Җ DATABASEMENU 
Җ PHOTOOXYMENU
Җ DOWNLOADMENU
Җ ANONYMOUSMENU
╰━ ▬G▬G▬ ✦✧✦ ▬G▬G▬
 ▬G▬G▬ ✦G✦ ▬G▬G▬

© ⏤͟͟͞PROUDLY BY GABBY
+254112842772
▬G▬G▬ ✦✧✦ ▬G▬G▬
╰━══⊷
━━•G〘 HERE IS MY MENU 〙
`
    sorted.map(async (command, i) => {
      if (command.dontAddCommandList === false && command.pattern !== undefined) {
        CMD_HELP += `│ ${i + 1} ${addSpace(i + 1, sorted.length)}${textToStylist(
          command.name.toUpperCase(),
          'mono'
        )}\n`
      }
    })

    CMD_HELP += `╰━━•Gꪶ ཻུ۪۪G⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪G⸙G•━━͙`
    return await message.send('```' + CMD_HELP + '```')
  }
)

bot.addCommand(
  {
    pattern: 'Gabby ?(.*)',
    dontAddCommandList: true,
  },
  async (message, match, ctx) => {
    let msg = ''
    const sorted = ctx.commands.sort((a, b) => {
      if (a.name && b.name) {
        return a.name.localeCompare(b.name)
      }
      return 0
    })
    sorted.map(async (command, index) => {
      if (command.dontAddCommandList === false && command.pattern !== undefined) {
        msg += `${index + 1} ${command.name}\n${command.desc}\n\n`
      }
    })
    await message.send('```' + msg.trim() + '```')
  }
)
bot.addCommand(
  {
    pattern: 'menu ?(.*)',
    dontAddCommandList: true,
  },
  async (message, match, ctx) => {
    const commands = {}
    ctx.commands.map(async (command, index) => {
      if (command.dontAddCommandList === false && command.pattern !== undefined) {
        let cmdType = command.type.toLowerCase()
        if (!commands[cmdType]) commands[cmdType] = []
        let isDiabled = command.active === false
        let cmd = command.name.trim()
        commands[cmdType].push(isDiabled ? cmd + ' [disabled]' : cmd)
      }
    })
    const [date, time] = getDate()
    let msg = `\`\`\`ҖҖ-GGGGGGGGGGGGG-ҖҖ
ҖוGGGGGGGGGGGGGGGוҖ
▌וGGGGGGGGGGGGGGGו▐
G└┐GGGGGGGGGGGGG┌┘G
GG└┐GGGGGGGGGGG┌┘GG
GG┌┘҂҂GGGGG҂҂҂└┐GG
▌Gו҉҉҉҉▌GGG▐҉҉҉҉וG▐
ҖGו▐Җ҉-GG҂GG-ҖҖ▌וGҖ
Җ▌┘GGGGG▐Җ▌GGGGG└▐Җ
ҖҖGG҂҂▓G-Җ-G▓҂҂GGҖҖ
ҖҖ҂҉┘Җ▌GGGGG▐Җ└҉҂ҖҖ
ҖҖҖGG▐҉┬┬┬┬┬҉▌GGҖҖҖ
ҖҖҖ▌GG┬┼┼┼┼┼┬GG▐ҖҖҖ
ҖҖҖҖ҂G└┴┴┴┴┴┘G҂ҖҖҖҖ
Җ¥ҖҖҖ҂GGGGGGG҂ҖҖ¥ҖҖ

╭━▬G▬G▬ ✦G✦ ▬G▬G▬҉➤
HELLO THERE : ${message.pushName}
╰G▬G▬ ✦G✦ ▬G▬G▬҉➤

TIME : ${time}
MY PING✧IS 0.0001MS
DAY: ${date.toLocaleString('en', { weekday: 'long' })}
PLUGINS PRE INSTALLED : ${ctx.pluginsCount}
OWNER✧+254112842772
PLATFORM : ${getPlatform()}
PREFIX✧MULTIPREFIX✧ CURRENT: ${ctx.PREFIX}
VPS RAM : ${getRam()}
MODE✧PRIVATE

UPTIME AND RUNTIME : ${getUptime('t')}
DATE : ${date.toLocaleDateString('hi')}

╭━━•G⏤͟͟͞GABBYZ MENU PANEL҉➤G•━━╮
┃ GABBYZ JUSTICE IS HERE
┃҉ ⏤͟͟͞GABBYZ MENU PANEL ҉҉➤ ↶↷
╰━━•Gꪶ ཻུ۪۪G⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪G⸙G•━━͙✩̣̣̣̣
 ▬G▬G▬ ✦✧✦ ▬G▬G▬
╭━━•G〘 HERE IS MY MENU 〙
Җ GABBY
Җ MENU 
Җ AI-MENU 
Җ AUDIOMENU 
Җ AUTOREPLYMENU 
Җ GROUPMENU 
Җ OWNERMENU  
Җ BOTMENU 
Җ BUDGETMENU 
Җ DOCUMENTMENU 
Җ DOWNLOADMENU 
Җ EDITORMENU 
Җ CONVERTMENU 
Җ GAMEMENU
Җ LOGIAMENU 
Җ MISCMENU
Җ PERSONALDMENU
Җ PLUGINMENU
Җ SCHEDULE
Җ SEARCH
Җ STICKER
Җ TEXTMAKER
Җ USERMENU
Җ VARSMENU
Җ VIDEOMENU
Җ WHATSAPPMENU
╰━ ▬G▬G▬ ✦✧✦ ▬G▬G▬
 ▬G▬G▬ ✦G✦ ▬G▬G▬

© ⏤͟͟͞PROUDLY BY GABBY
+254112842772
▬G▬G▬ ✦✧✦ ▬G▬G▬
╰━══⊷\`\`\`\n`

    if (match && commands[match]) {
      msg += ` ━━•G〘 HERE IS MY MENU 〙 ${textToStylist(match.toLowerCase(), 'smallcaps')} G▬҉➤\n`
      for (const plugin of commands[match])
        msg += ` │ ${textToStylist(plugin.toUpperCase(), 'mono')}\n`
      msg += ` ╰━━•Gꪶ ཻུ۪۪G⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪G⸙G•━━͙`

      return await message.send(msg)
    }
    for (const command in commands) {
      msg += ` ━━•G〘 HERE IS MY MENU 〙 ${textToStylist(command.toLowerCase(), 'smallcaps')} G▬҉➤\n`
      for (const plugin of commands[command])
        msg += ` │ ${textToStylist(plugin.toUpperCase(), 'mono')}\n`
      msg += ` ╰━━•Gꪶ ཻུ۪۪G⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪G⸙G•━━͙\n`
    }
    await message.send(msg.trim())
  }
)
