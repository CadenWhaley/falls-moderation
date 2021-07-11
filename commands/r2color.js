const db = require("quick.db");
const Discord = require('discord.js');

module.exports = {
    name: 'r2color',
    description: "",
    execute(message, args){
      if(message.member.roles.cache.some(r=>["Founding Furry", "🤖Bot Developer🤖", "Server Booster", "Cute Fluff", "Fuzzball", "Advanced Fur", "Precious Floof", "Elite Softy", ].includes(r.name)) ) {
        try{
      db.delete(`textcolor2_${message.author.id}`)
      const startupargs = args.toString()
       db.set(`textcolor2_${message.author.id}`, startupargs)
       message.channel.send(`I have set your Rank card overlay 2 color to ${args}!`)
      } catch (error) {
      message.channel.send("Chu forgot the hex silly :3")
}
} else {
  message.channel.send("Chu don't have the required perms silly! UwU")
}
    }
}



