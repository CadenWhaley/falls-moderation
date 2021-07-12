const db = require("quick.db");
const Discord = require('discord.js');

module.exports = {
    name: 'test',
    description: "",
    execute(message, args){
      message.channel.send("test")
    }
}



