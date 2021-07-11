const db = require("quick.db");
const Discord = require('discord.js');


module.exports = {
    name: 'muzzle',
    description: "",
    execute(message, args){
        let member100 = message.mentions.members.first();
        if(member100.user.id == message.author.id) return message.channel.send("No");
if(message.author.id == "405477418481221633"){


                      if(member100.hasPermission("MANAGE_WEBHOOKS")) return message.channel.send("Don't even try.. just dont Lmao ")

      if(!member100) return message.channel.send("There is no user for me to muzzle!");
message.channel.send("User has been muzzled!")
db.set(`muzzle_${member100.user.id}`,1)
}
else
message.channel.send("No no and no")
// 1 = true
// 0 =  false
    }
}



