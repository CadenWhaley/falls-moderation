const db = require("quick.db");
const Discord = require('discord.js');

module.exports = {
    name: 'ubackground',
    description: "",
    execute(message, args){
try{
      db.delete(`background_${message.author.id}`)
      const startupargs = args.toString()
       db.set(`background_${message.author.id}`, startupargs)
       message.channel.send(`I have set your background to ${args}`)
      } catch (error) {
      message.channel.send("Chu forgot the url silly :3")
}

    }
}



