const Discord = require("discord.js");
const client = new Discord.Client();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

module.exports = {
    name: 'ageg',
    description: "How old are chu?",
    execute(message, args){
        var age = getRandomInt(125);
       message.channel.send(`Chu is ${age}!?`);

    }
}