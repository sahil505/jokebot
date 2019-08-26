const SlackBot = require('slackbots');
const axios = require('axios');

 const bot = new SlackBot({
  token: 'xoxb-740252521542-737604450292-Mnskuk7QHXQqB4WsSkRI3O4k',
  name: 'jokebot'
 });

 // Start Handler
 bot.on('start', () => {
   const params = {
     icon_emoji: ':laughing:'
   }

   bot.postMessageToChannel('general', 'Get ready to burst into tears with @jokebot', params);
 });
