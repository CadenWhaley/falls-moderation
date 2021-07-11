const Discord = require("discord.js");
const client = new Discord.Client();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

module.exports = {
    name: 'pansexual',
    description: "Tells you how pan you are",
    execute(message, args){
        var pan = getRandomInt(100);
       message.channel.send(`You are ${pan}% Pan!`);

    }
}