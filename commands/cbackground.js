const db = require("quick.db");
const Discord = require('discord.js');

module.exports = {
    name: 'cbackground',
    description: "",
    execute(message, args){
      db.delete(`background_${message.author.id}`)
var Attachment = (message.attachments)
if (Attachment){
  try{
    db.set(`background_${message.author.id}`, Attachment.array()[0].url)
    message.channel.send("I am too lazy to reprint the image but yes I changed it to dat UwU")
}catch (error) {
      message.channel.send("Chu forgot the attachment silly :3")
}

    }
}
}