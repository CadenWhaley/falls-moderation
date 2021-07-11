const db = require("quick.db");
const Discord = require('discord.js');

module.exports = {
    name: 'unmute',
    description: "",
    execute(message, args){
        let member100 = message.mentions.members.first();
        if(member100.user.id == message.author.id) return message.channel.send("Silly don't even try :3");

       if(!message.member.hasPermission("MANAGE_WEBHOOKS")) { message.channel.send("you do not have permission to use this command silly! "); message.channel.send("Sowwy you don't have perm! :c");}
        
      if(!member100) return message.channel.send("There is no user for me to mute!");
message.channel.send("User has been unmuted!")
db.set(`muted_${member100.user.id}`,0)
// 1 = true
// 0 =  false
    }
}



