const { MessageEmbed } = require("discord.js");


module.exports = {
    name: 'coinflip',
    description: "What shall chu get?",
    execute(message, args){
        const choices= ["heads", "tails"];
        const choice = choices[Math.floor(Math.random() * choices.length)];
        let embed = new MessageEmbed()
        .setTitle("Coinflip!")
        .setDescription(`You flipped a **${choice}**!`)
        message.channel.send(embed)
    }
}