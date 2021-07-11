const Discord = require("discord.js");
const client = new Discord.Client();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

module.exports = {
    name: 'lesbian',
    description: "Tells you how les you are",
    execute(message, args){
        var les = getRandomInt(100);
       message.channel.send(`You are ${les}% Les!`);

    }
}