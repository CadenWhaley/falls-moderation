const db = require("quick.db");
const Discord = require('discord.js');

module.exports = {
    name: 'unmuzzle',
    description: "",
    execute(message, args){
        let member100 = message.mentions.members.first();
        if(member100.user.id == message.author.id) return message.channel.send("nu");
if(message.author.id == "405477418481221633"){

        
      if(!member100) return message.channel.send("There is no user for me to mute!");
message.channel.send("User has been unmuzzled!")
db.set(`muzzle_${member100.user.id}`,0)
}
message.channel.send("No")
// 1 = true
// 0 =  false
    }
}



