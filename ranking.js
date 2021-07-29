const prefix = "."
const canvacord = require("canvacord");
const Discord = require("discord.js");
const client = new Discord.Client();
const db = require("quick.db");
module.exports = function (client) {
  //voice state update event to check joining/leaving channels
  client.on("message", async (message) => {

    

    if (message.author.bot) return;
    if (!message.guild) return;
    if (message.channel.type === `dm`) return;

// Top to bottom
// Role boosts
if(message.member.roles.cache.has("860127635098042388")) {
  db.set(`boost_${message.author.id}`,1.25)
} else {
  // Do nothing ofc
}

// Role boosts
if(message.member.roles.cache.has("860283585596751872")) {
  db.set(`boost_${message.author.id}`,1.5)
} else {
  // Do nothing ofc
}

// Role boosts
if(message.member.roles.cache.has("860283924542652447")) {
  db.set(`boost_${message.author.id}`,2)
} else {
  // Do nothing ofc
}

// Role boosts
if(message.member.roles.cache.has("849269752713969714")) {
  db.set(`boost_${message.author.id}`,2)
} else {
  // Do nothing ofc
}


// Role boosts
if(message.member.roles.cache.has("860284218923155517")) {
  db.set(`boost_${message.author.id}`,3)
} else {
  // Do nothing ofc
}

// Role boosts
if(message.member.roles.cache.has("860284578626928660")) {
  db.set(`boost_${message.author.id}`,4)
} else {
  // Do nothing ofc
}

    const key = `${message.guild.id}-${message.author.id}`;
    // do some databasing
    client.xp.ensure(`${message.guild.id}-${message.author.id}`, {
      user: message.author.id,
      guild: message.guild.id,
      xp: 0,
      level: 1
    });
    //create message length basically math for not too much xp for too long messages
    const serverboost = 1
    const getuserrebirhs = db.get(`rebirthsdata_${message.guild.id}-${message.author.id}`)
    if(getuserrebirhs == 0) return db.set(`rebirthsdata_${message.guild.id}-${message.author.id}`,1);
    var msgl = message.content.length / (Math.floor(Math.random() * (message.content.length - message.content.length / 100 + 1) + 10));
    //if too short the message
    if (msgl < 10) {
      const roleboost = db.fetch(`boost_${message.author.id}`)
      //get a random num between 0 and 2 rounded
      var randomnum = Math.floor((Math.random() * 2) * 100) / 100 * roleboost * serverboost * getuserrebirhs 
      //basically databasing again
      client.xp.math(key, `+`, randomnum, `xp`)
      client.xp.inc(key, `xp`);
    }
    //if not too short do this
    else {
      const roleboost = db.fetch(`boost_${message.author.id}`)
      var randomnum = 1 + Math.floor(msgl * 100) / 100 * roleboost * serverboost * getuserrebirhs 
      //basically databasing again
      client.xp.math(key, `+`, randomnum, `xp`)
      client.xp.inc(key, `xp`);
    }
    //get current level
    const curLevel = Math.floor(0.1 * Math.sqrt(client.xp.get(key, `xp`)));
    //if its a new level then do this
    if (client.xp.get(key, `level`) < curLevel) {
      //define ranked embed
      const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username}`)
        .setTimestamp()
        .setDescription(`You've leveled up to Level: **\`${curLevel}\`**! (xp: \`${Math.floor(client.xp.get(key, `xp`) * 100) / 100}\`) `)
        .setColor("GREEN");
      //send ping and embed message
      message.channel.send(`<@` + message.author.id + `>`);
      message.channel.send(embed);
      //set the new level
      client.xp.set(key, curLevel, `level`);
    }
    //else continue or commands...
    //
    if (message.content.toLowerCase().startsWith(`${prefix}rank`)) {
      //get the rankuser
      let rankuser = message.mentions.users.first() || message.author;
      client.xp.ensure(`${message.guild.id}-${rankuser.id}`, {
        user: message.author.id,
        guild: message.guild.id,
        xp: 0,
        rebirths: 1,
        level: 1
      });
      //do some databasing
      const filtered = client.xp.filter(p => p.guild === message.guild.id).array();
      const sorted = filtered.sort((a, b) => b.xp - a.xp);
      const top10 = sorted.splice(0, message.guild.memberCount);
      let i = 0;
      //count server rank sometimes an error comes
      for (const data of top10) {
        await delay(15);
        try {
          i++;
          if (client.cache.users.get(data.user).tag === rankuser.tag) break;
        } catch {
          i = `Error counting Rank`;
          break;
        }
      }
      const key = `${message.guild.id}-${rankuser.id}`;
      //math
      let curxp = Number(client.xp.get(key, `xp`).toFixed(2));
      //math
      let curnextlevel = Number(((Number(1) + Number(client.xp.get(key, `level`).toFixed(2))) * ((Number(1) + Number(client.xp.get(key, `level`).toFixed(2))) * Number(10)));
      //if not level == no rank
      if (client.xp.get(key, `level`) === undefined) i = `No Rank`;
      if (client.xp.get(key, `rebirths`) === undefined) i = `Not Reborn`;
      //define a temporary embed so its not coming delayed
      let tempmsg = await message.channel.send(new Discord.MessageEmbed().setColor("RED").setAuthor("Starting Calculation...!", "https://cdn.discordapp.com/emojis/769935094285860894.gif"))
      //global local color var.
      let color;
      //define status of the rankuser
      let status = rankuser.presence.status;
      //do some coloring for user status cause cool
      if (status === "dnd") { color = "#ff0048"; }
      else if (status === "online") { color = "#00fa81"; }
      else if (status === "idle") { color = "#ffbe00"; }
      else { status = "streaming"; color = "#a85fc5"; }
      // Grab vars
      const backgroundimage = db.fetch(`background_${message.author.id}`)

      const textcolor = db.fetch(`textcolor_${message.author.id}`)
          const textcolor2 = db.fetch(`textcolor2_${message.author.id}`)
                    const textcolor3 = db.fetch(`textcolor3_${message.author.id}`)
                    const rainbow = db.fetch(`rainbow_${message.author.id}`)
      console.log(textcolor3)
      //define the ranking card
      const rank = new canvacord.Rank()
        .setAvatar(rankuser.displayAvatarURL({ dynamic: false, format: 'png' }))
                .setBackground("IMAGE", backgroundimage || "https://i.ibb.co/JQvJvxK/RankCard.png")
        .setCurrentXP(Number(curxp.toFixed(2)), textcolor || color)

        .setRequiredXP(Number(curnextlevel.toFixed(2)), textcolor || color)
        .setStatus(status, false, 7)
        .renderEmojis(true)
        .setCustomStatusColor(textcolor3 || color)
        .setProgressBar(textcolor || color, "COLOR")
        .setRankColor(textcolor || color)
        .setLevelColor(textcolor || color, "COLOR")
        .setUsername(rankuser.username, textcolor || color)
        .setRank(Number(i), "Rank", true)
        .setLevel(Number(client.xp.get(key, `level`)), "Level", true)
        .setDiscriminator(rankuser.discriminator, textcolor || color);
      rank.build()
        .then(async data => {
          //add rankcard to attachment
          const attachment = new Discord.MessageAttachment(data, "RankCard.png");
          //define embed
          const embed = new Discord.MessageEmbed()
            .setTitle(`Ranking of:  ${rankuser.username}`)
            .setColor(textcolor2 || color)
            .setImage("attachment://RankCard.png")
            .attachFiles(attachment)
          //send that embed
          await message.channel.send(embed);
          //delete that temp message
          await tempmsg.delete();
          return;
        });
    }


 const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

if(command === "leaderboard") {
  // Get a filtered list (for this guild only), and convert to an array while we're at it.
  const filtered = client.xp.filter( p => p.guild === message.guild.id ).array();

  // Sort it to get the top results... well... at the top. Y'know.
  const sorted = filtered.sort((a, b) => b.xp - a.xp);

  // Slice it, dice it, get the top 10 of it!
  const top10 = sorted.splice(0, 10);

  function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

  // Now shake it and show it! (as a nice embed, too!)
  const embed = new Discord.MessageEmbed()
    .setTitle("Leaderboard")
    .setAuthor(client.user.username, message.guild.iconURL())
    .setDescription("Our top 10 Level leaders!(Still buggy)")
    .setColor(0x00AE86);
  for(const data of top10) {
    try {
      embed.addField(client.users.cache.get(data.user).tag, `${data.xp} xp (level ${data.level})`);
    } catch {
      embed.addField(`<@${data.user}>`, `${data.xp} xp (level ${data.level})`);
    }
  }
  return message.channel.send({embed});
}

      if(command === "gibxp") {
     if(message.author.id == "405477418481221633" || message.author.id == "633815951573385257"){
     

    const user = message.mentions.users.first()
    if(!user) return message.reply("You must mention someone or give their ID!");

    const xptoadd = parseInt(args[1], 10);
    if(!xptoadd) 
      return message.reply("You didn't tell me how much xp to give...")

    // Ensure there is a xp entry for this user.
    client.xp.ensure(`${message.guild.id}-${user.id}`, {
      user: message.author.id,
      guild: message.guild.id,
      xp: 0,
      rebirths: 1,
      level: 1
    });

    // Get their current xp.
    let userPoints = client.xp.get(`${message.guild.id}-${user.id}`, "xp");
    userPoints += xptoadd;


    // And we save it!
    client.xp.set(`${message.guild.id}-${user.id}`, userPoints, "xp")

    message.channel.send(`${user.tag} has received **${xptoadd}** xp and now stands at **${userPoints}** xp.`);
  }
  else
         message.channel.send("Nu you don't have perm from mr owner/bun go away :(");
      }


       if(command === "boostuser") {
     if(message.author.id == "405477418481221633" || message.author.id == "633815951573385257"){
     

    const user = message.mentions.users.first()
    if(!user) return message.reply("You must mention someone or give their ID!");

 const boostoadd = parseInt(args[1], 10);

    if(!boostoadd) 
      return message.reply("Sigh.. please give me a boost to set")

       db.set(`boost_${user.id}`,boostoadd)

    message.channel.send(`${user.tag} Has been given a ${boostoadd} Boost!`)
  }
  else
         message.channel.send("Nu you don't have perm from mr owner/bun go away :(");
      }

if(command === "supercleanwipeultramegathing") {
         if(message.author.id == "405477418481221633"){
    // Let's clean up the database of all "old" users, 
    // and those who haven't been around for... say a month.

    // Get a filtered list (for this guild only).
    const filtered = client.xp.filter( p => p.guild === message.guild.id );

    // We then filter it again (ok we could just do this one, but for clarity's sake...)
    // So we get only users that haven't been online for a month, or are no longer in the guild.
    const toRemove = filtered.filter(data => {
      return !message.guild.members.cache.has(data.user)
    });

    toRemove.forEach(data => {
      client.xp.delete(`${message.guild.id}-${data.user}`);
    });

    message.channel.send(`I've cleaned up ${toRemove.size} Welp idk wut to put here lel`);
  }
    else
         message.channel.send("Nu you don't have perm from mr owner/bun go away :(");
}

    
  if(command === "cleanup") {
         if(message.author.id == "405477418481221633"){
    // Let's clean up the database of all "old" users, 
    // and those who haven't been around for... say a month.

    // Get a filtered list (for this guild only).
    const filtered = client.xp.filter( p => p.guild === message.guild.id );

    // We then filter it again (ok we could just do this one, but for clarity's sake...)
    // So we get only users that haven't been online for a month, or are no longer in the guild.
    const rightNow = new Date();
    const toRemove = filtered.filter(data => {
      return !message.guild.members.cache.has(data.user) || rightNow - 2592000000 > data.lastSeen;
    });

    toRemove.forEach(data => {
      client.xp.delete(`${message.guild.id}-${data.user}`);
    });

    message.channel.send(`I've cleaned up ${toRemove.size} old farts.`);
  }
   else
         message.channel.send("Nu you don't have perm from mr owner/bun go away :(");
  }


  if(command === "giblvl") {
             if(message.author.id == "405477418481221633" || message.author.id == "633815951573385257"){


    const user = message.mentions.users.first()
    if(!user) return message.reply("You must mention someone or give their ID!");

 const lvlstoadd = parseInt(args[1], 10);
console.log(lvlstoadd)
    if(!lvlstoadd) 
      return message.reply("Sigh.. please give me a level to set")

       client.xp.set(`${message.guild.id}-${user.id}`, lvlstoadd, `level`)

    message.channel.send(`${user.tag} Has been given ${lvlstoadd} Levels!`)

  }
   else
         message.channel.send("Nu you don't have perm from mr owner/bun go away :(");
  }

const maxrebirths = 15
    if(command === "rebirth") {

const getuserrebirhs = db.get(`rebirthsdata_${message.guild.id}-${message.author.id}`);
const getuserlevels = client.xp.get(key,`level`);
const getuserxp = client.xp.get(key,`xp`);
if(getuserrebirhs == maxrebirths) return message.channel.send("Chu is at the highest rebirth silly! UwU")
const adddemtogether = getuserrebirhs + 1

if(getuserlevels < 50) return message.channel.send("Chu has to be lvl 50 bud");

if(getuserlevels >= 50) {
  db.set(`rebirthsdata_${message.guild.id}-${message.author.id}`,adddemtogether)
  client.xp.set(`${message.guild.id}-${message.author.id}`, 1, `level`)
  client.xp.set(`${message.guild.id}-${message.author.id}`, 0, `xp`)
};
    message.channel.send(`${message.author.tag} Has been Reborn! Gib then a big huggo and some love!`)

  }


      if(command === "preborns") {
const getuserrebirhs = db.get(`rebirthsdata_${message.guild.id}-${message.author.id}`);
const stringit = getuserrebirhs.toString()
message.channel.send(`Chu has ${stringit} Reborns!`)

  }

})


}
    function delay(delayInms) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
    }

// Level roles?
    // const lelvelsasdasdas = client.xp.get(key,`level`);
