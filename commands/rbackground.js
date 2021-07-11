const db = require("quick.db");
const Discord = require('discord.js');

module.exports = {
    name: 'rbackground',
    description: "",
    execute(message, args){
      db.delete(`background_${message.author.id}`)
      message.channel.send("I have set your background to default!")
    }
}



