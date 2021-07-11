const db = require("quick.db");
const Discord = require('discord.js');

module.exports = {
    name: 'staffapplications',
    description: "",
    aliases: ["staffapp","staffapps"],
    execute(message, args){
      if(message.author.id == "405477418481221633" || message.author.id == "633815951573385257"){

      db.delete(`staffapps_${message.author.id}`)
      const yes = args.toString()
      db.set(`staffapps_`,yes)
      }
      else
      message.channel.send("No")
    }
}



