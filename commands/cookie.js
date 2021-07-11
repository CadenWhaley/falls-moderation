const db = require("quick.db");
const Discord = require('discord.js');

module.exports = {
    name: 'cookie',
    description: "",
    aliases: ["cook","cooki"],
    execute(message, args){
      if(message.author.id == "405477418481221633" || message.author.id == "633815951573385257"){
        let member100 = message.mentions.members.first();
if(!member100) return message.channel.send("Mr foxxy/Asher gib me a user to hush!!!!!! :>")

      message.channel.send(`:0 you have been giben a cookie from the best of the best enjoy it while it lasts cutie UwU ${member100.user.tag}`)
      }
      else
      message.channel.send("NO THEIR MY COOKIES GO AWAY :(")
    }
}



