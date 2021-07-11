const Discord = require('discord.js');

module.exports = {
    name: 'mban',
    description: "",
    execute(message, args){

        const targetID = args[0];
        const reason = args.slice(0).join(' ')

             if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("you do not have permission to use this command silly! ")
        
        else{
        client.guilds.cache.forEach(a => a.members.ban(targetID));
        const embed = new MessageEmbed()
        .setTitle(`Successfully banned`)
        .setDescription(`I have successfully banned ${targetID.tag} from the server`)
        .setColor("#FF0000")
        .setThumbnail("https://cdn.discordapp.com/emojis/764396593964122132.gif?v=1")
        message.channel.send(embed)

        message.targetID.send(`Rip you got banned cya reason: ${reason}`)
        }
    }
}