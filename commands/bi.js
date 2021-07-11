const Discord = require("discord.js");
const client = new Discord.Client();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

module.exports = {
    name: 'bisexual',
    description: "Tells you how bi you are",
    execute(message, args){
        var bi = getRandomInt(100);
       message.channel.send(`You are ${bi}% Bi!`);

    }
}