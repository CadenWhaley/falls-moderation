const Discord = require("discord.js");
const client = new Discord.Client();


module.exports = {
    name: 'foxhush',
    description: "Hush sir",
    execute(message, args){
      if(message.author.id === "405477418481221633"){
          let member100 = message.mentions.members.first();
            if(!member100) return message.channel.send("Mr foxxy gib me a user to hush!!!!!! :>")

       message.channel.send(`${member100} You have been hushed by the one and only creator of this weird bot and uh knows things ig and stuff im trying to keep this as long as possible now HUSH HE HAS HUSHED CHUUUUUUUUU!!!`);
      }
    }
}