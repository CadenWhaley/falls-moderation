const Discord = require("discord.js");
const client = new Discord.Client();
const db = require("quick.db");

module.exports = {
    name: 'accept',
    description: "Accept a users application! :D",
    execute(message, args){
      let user = message.author;
       if(!message.member.hasPermission("MANAGE_WEBHOOKS")) return message.channel.send("you do not have permission to use this command silly! ")

      let User = message.mentions.users.first()
        let member100 = message.mentions.members.first();

      let embedthing = db.fetch(`id_${member100.user.id}`)
      
      if(!embedthing) {
        message.channel.send("There is no data for me to accept!");
      } 
        
                 if (member100.roles.cache.some(role => role.name === 'Verified'))  return message.channel.send("Silly that user is already verified!")
        if(!User) return message.channel.send("Please provide a user for me to accept!")
        
        User.send(":tada: Your application to " + message.guild.name + " got accepted by: " + message.author.tag)
         let UserId111111 = message.mentions.users.first().id;
         const channel = message.client.channels.cache.find(x => x.id == "837131713938718751")
        channel.send(`Welcome <@${User.id}> to Floofy Falls. We’re so excited to have you here. Be sure to grab some roles in <#837316421372477490>. Enjoy your time here!`);
        let member = message.mentions.members.first();
        let role = message.guild.roles.cache.find(r => r.name === "Verified");
                let role1 = message.guild.roles.cache.find(r => r.name === "Unverified");
        member.roles.add(role).catch(console.error);
        member.roles.remove(role1).catch(console.error);


message.client.channels.fetch("847227926310158367").then(channel => {
    channel.messages.fetch(embedthing).then(message => {
        message.react("✅")
    })
})
db.delete(`id_${member100.user.id}`)
    }
}
