const db = require("quick.db");
const Discord = require('discord.js');
const lib = require('lib')

module.exports = {
    name: 'shop',
    description: "",
    execute(message, args){
        await lib.discord.channels['@0.1.1'].messages.create({
            "channel_id": `${context.params.event.channel_id}`,
            "content": "",
            "tts": false,
            "embed": {
              "type": "rich",
              "title": `xxZ`,
              "description": "",
              "color": 0x00FFFF
            }
          });
          
    }
}

