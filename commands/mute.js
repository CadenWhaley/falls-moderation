const db = require("quick.db");
const Discord = require('discord.js');


module.exports = {
    name: 'mute',
    description: "",
    execute(message, args){
        let member100 = message.mentions.members.first();
        if(member100.user.id == message.author.id) return message.channel.send("rly.. Did you rly just try to mute your self..? silly..");

               if(!message.member.hasPermission("MANAGE_WEBHOOKS")) return message.channel.send("you do not have permission to use this command silly! ")

                      if(member100.hasPermission("MANAGE_WEBHOOKS")) return message.channel.send("Don't even try.. just dont Lmao ")

      if(!member100) return message.channel.send("There is no user for me to mute!");
message.channel.send("User has been muted!")
db.set(`muted_${member100.user.id}`,1)
// 1 = true
// 0 =  false
    }
}



