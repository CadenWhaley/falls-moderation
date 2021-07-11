const Discord = require("discord.js");
const client = new Discord.Client();
const db = require("quick.db");

module.exports = {
    name: 'decline',
    description: "Declines a Members application :(",
    execute(message, args){
        if(!message.member.hasPermission("VIEW_AUDIT_LOG")) return message.channel.send("you don't have permission to use this command");

        let User = message.mentions.users.first()
        if(!User) return message.channel.send("Please provide a user for me to decline")
let member100 = message.mentions.members.first();
                      let embedthing = db.fetch(`id_${member100.user.id}`)
                      

      if(!embedthing){
        message.channel.send("There is no data for me to decline!")
      }

const reason = args.slice(1).join(' ');

             User.send("Your application to " + message.guild.name + " got declined by: " + message.author.tag + " Reason: " + reason)

        message.client.channels.fetch("847227926310158367").then(channel => {
    channel.messages.fetch(embedthing).then(message => {
        message.react("❌")
    })
})
db.delete(`id_${member100.user.id}`)
}
}