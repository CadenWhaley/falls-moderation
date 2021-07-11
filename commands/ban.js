const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: 'ban',
    description: "",
    execute(message, args){
             if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("you do not have permission to use this command silly! ")
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.members.resolve(user);
      if (member) {
        const reason = args.slice(1).join(' ');
        member
          .ban({
            reason: reason,
          })
          .then(() => {
            message.channel.send(`Successfully banned ${user.tag}`);
          })
          .catch(err => {
            message.channel.send('I was unable to ban the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.channel.send("That user isn't in this guild!");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.channel.send("You didn't mention the user to ban!");
    }
  }
    }



