const Discord = require("discord.js");
const client = new Discord.Client();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

module.exports = {
    name: 'silly',
    description: "Tells you how silly you are",
    execute(message, args){
        var silly = getRandomInt(100);
       message.channel.send(`You are ${silly}% Silly!`);

    }
}