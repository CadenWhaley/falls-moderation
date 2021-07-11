const Discord = require("discord.js");
const client = new Discord.Client();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

module.exports = {
    name: 'cute',
    description: "Tells you how cute you are",
    execute(message, args){
        var cute = getRandomInt(100); 
       message.channel.send(`You are ${cute}% Cute!`);

    }
}