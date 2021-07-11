const Discord = require("discord.js");
const client = new Discord.Client();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

module.exports = {
    name: 'gay',
    description: "Tells you how gay you are",
    execute(message, args){
        var gay = getRandomInt(100);
       message.channel.send(`You are ${gay}% Gay!`);

    }
}