const Discord = require("discord.js");
const client = new Discord.Client();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

module.exports = {
    name: 'straight',
    description: "Tells you how straight you are",
    execute(message, args){
        var straight = getRandomInt(100);
       message.channel.send(`You are ${straight}% Straight!`);

    }
}