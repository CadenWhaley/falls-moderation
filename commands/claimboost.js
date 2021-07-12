const db = require("quick.db");
const Discord = require('discord.js');

module.exports = {
    name: 'claimboost',
    description: "",
    execute(message, args){
        message.channel.send("Thank you for boosting I have sent you a message for you to claim your perks?")
        message.author.send("What would you like your boost role to be?").then(msg => {
          const filter1 = m => m.author.id === message.author.id
          msg.channel.awaitMessages(filter1, {
            time: 5 * 120000,
            max: 1
          }).then(messages => {
            let msg1 = messages.first().content
            message.author.send("Role Color?").then(msg => {
                const filter1 = m => m.author.id === message.author.id
                msg.channel.awaitMessages(filter1, {
                  time: 5 * 120000,
                  max: 1
                }).then(messages => {
                  let msg2 = messages.first().content
            const guild = message.guild
            guild.roles.create({ data: { name: msg1, color: msg2, } });
    }
}



