const Discord = require("discord.js");
const client = new Discord.Client();


module.exports = {
    name: 'hush',
    description: "Hush sir",
    execute(message, args){
      if(message.author.id === "633815951573385257"){
          let member100 = message.mentions.members.first();
            if(!member100) return message.channel.send("Mr asher please gib me a user to Hush!")

       message.channel.send(`${member100} You has been hushed by da great Mr asher Now HUSH!!!`);
      }
    }
}