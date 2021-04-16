const mineflayer = require('mineflayer')
const sleep = require('system-sleep')
/*

Made by Neumatic
http://valiant-mc.ml 
Simple mineflayer bot 
to keep a server
alive by auto relogging
every 10s

*/
function createBot () {
  const bot = mineflayer.createBot({
    host: 'hub.valiant-mc.ml',
    username: process.env.U,
    password: process.env.P
  })

//
  bot.on('login', (message) => {
    console.log('[HOST] Waiting 10000 ms (10s). . .')
      sleep(5000) // avoid spigot rate limiting
      bot.chat(`/server lobby`) // make sure the bot is on lobby
      console.log('[HOST] Waiting 10000 ms (10s). . .')
      sleep(10000) // stay on 10s
      bot.end() // kill bot
      console.log('[HOST] Relogging. . .')
   })
  bot.on('error', (err) => console.log(err)) // log error to console
  bot.on('end', createBot) // relog on end
}

createBot() // initial start