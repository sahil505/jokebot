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

// Error Handler
bot.on('error', (err) => console.log(err));

// Message Handler
bot.on('message', data => {
  if (data.type !== 'message') {
    return;
  }
  handleMessage(data.text);
});

// Respond to Data
const handleMessage = (message) => {
  if (message.includes(' chucknorris')) {
    chuckJoke();
  } else if (message.includes(' yomama')) {
    yoMamaJoke();
  } else if(message.includes(' random')) {
    randomJoke();
  }
}

// Tell a chuckJoke
const chuckJoke = () => {
  axios.get('http://api.icndb.com/jokes/random')
    .then(res => {
      const joke = res.data.value.joke;
      const params = {
        icon_emoji: ':laughing:'
      }

      bot.postMessageToChannel('general', `Chuck Norris: ${joke}`, params);
    })
}

// Tell a yoMamaJoke
const yoMamaJoke = () => {
  axios.get('http://api.yomomma.info')
    .then(res => {
      const joke = res.data.joke;
      const params = {
        icon_emoji: ':laughing:'
      }

      bot.postMessageToChannel('general', `Yo Mama: ${joke}`, params);
    })
}

// Tell a randomJoke
const randomJoke = () => {
  const rand = Math.floor(Math.random() * 2) + 1;
  if (rand == 1) chuckJoke();
  else if (rand == 2) yoMamaJoke();
}
