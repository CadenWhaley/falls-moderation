// Startup
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
client.commands = new Discord.Collection();
const prefix = "."
const keep_alive = require('./keep_alive.js')
const db = require("quick.db");
const Enmap = require("enmap")
const canvacord = require("canvacord")
client.xp = new Enmap({ name: "xp" });

// Main Script
client.once('ready', () => {
  console.log('Bot is Online!')
  client.user.setStatus('online');
});

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command)
}

client.on('message', message =>{
   
    
  const ismuted = db.fetch(`muted_${message.author.id}`)
  if(ismuted == 1){
    try{
     for (var i = 0; i < 4; i++)  message.delete();
    } catch (error) {
      console.log("Heheh caught the error so it doesn't spam the console <3")
    }
    message.author.send("Silly your muted! :3")
  }
  
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
       const command = client.commands.get(commandName)   || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))
       
   if (!command) return;
    try{
      command.execute(message,args)
    } catch (error) {
      console.error(error);
      message.reply("There was an issue executing da command! :(")
    }

});
// Run Levels
const leveling = require("./ranking");
leveling(client); 

client.login(process.env.TOKEN);
