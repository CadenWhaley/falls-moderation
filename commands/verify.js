
const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: 'verify',
    description: "Start an application",
    execute(message, args){

       let questions = {
        firstQuestion: "**How Old Are you?**",
        secondQuestion: "**How did you find out about us? If it was a website/server, provide the name of the website/server. If it was a friend, provide their discord username.**",
        thirdQuestion: "**Tell us something about you, Please try and give at least 50 characters minimum.**",
        fourthquestion: "**Are you a furry?**",
        fifthquestion: "**If you get accepted what are you gonna do in this server?**",
        sixthquestion: "**If you are a furry whats your sona? (Just say something like not a furry if your not a furry.)**",
    }



  if (message.member.roles.cache.some(role => role.name === 'Verified')) return  message.channel.send("Silly your already verified! ")
        message.channel.send("I have started this process in your DM's. Type `cancel` to cancel")
        message.author.send(questions.firstQuestion).then(msg => {
            const filter1 = m => m.author.id === message.author.id
            msg.channel.awaitMessages(filter1, {
                time: 5 * 60000,
                max: 1
            }).then(messages => {
                let msg1 = messages.first().content
                if(msg1.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                message.author.send(questions.secondQuestion).then(msg => {
                    const filter1 = m => m.author.id === message.author.id
                    msg.channel.awaitMessages(filter1, {
                        time: 5 * 60000,
                        max: 1
                    }).then(messages => {
                        let msg2 = messages.first().content
                        if(msg2.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                        message.author.send(questions.thirdQuestion).then(msg => {
                            const filter1 = m => m.author.id === message.author.id
                            msg.channel.awaitMessages(filter1, {
                                time: 5 * 60000,
                                max: 1 }).then(messages => {
                          let msg4 = messages.first().content
                        if(msg4.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                        message.author.send(questions.fourthquestion).then(msg => {
                            const filter1 = m => m.author.id === message.author.id
                            msg.channel.awaitMessages(filter1, {
                                time: 5 * 60000,
                                max: 1 }).then(messages => {
                 let msg6 = messages.first().content
                        if(msg6.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                        message.author.send(questions.fifthquestion).then(msg => {
                            const filter1 = m => m.author.id === message.author.id
                            msg.channel.awaitMessages(filter1, {
                                time: 5 * 60000,
                                max: 1 }).then(messages => {
                                                   let msg7 = messages.first().content
                        if(msg7.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                        message.author.send(questions.sixthquestion).then(msg => {
                            const filter1 = m => m.author.id === message.author.id
                            msg.channel.awaitMessages(filter1, {
                                time: 5 * 60000,
                                max: 1 }).then(messages => {
                                                let msg5 = messages.first().content
                                                if(msg5.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                                                message.author.send("Subbmitted application now please wait while one of our Staff Members review it!").then(msg => {
                                message.client.channels.cache.get("847227926310158367").send("<@&841726560217726986> A new app has arrived!");                                               
                                                   message.client.channels.cache.get("847227926310158367").send(
                                                    
                                                       new Discord.MessageEmbed()
                                                            .setTitle('Application Submitted')
                                                            .setDescription(`This application was submitted by ${message.author.tag} (${message.author.id}).\nCreated: ${message.author.createdAt}`)
                                                            .addField(questions.firstQuestion, "Answer: " + msg1)
                                                            .addField(questions.secondQuestion, "Answer: " + msg2)                                                                     .addField(questions.thirdQuestion, "Answer: " + msg4)
                                                            .addField(questions.fourthquestion, "Answer: " + msg6)
                                                            .addField(questions.fifthquestion, "Answer: " + msg7)
                                                            .addField(questions.sixthquestion, "Answer: " + msg5)
                                                            ).then(sent => { 
                                                     let id11 = message.author.id

try{
     for (var i = 0; i < 4; i++)  db.set(`id_${id11}`, sent.id)
    } catch (error) {
      console.log("How is there an error?")
    }
    })
                                                })
                                })
                        })
                                })
                        })
                                })
                        })
                                })
                        })
                    })
                })
            })
        })
    }
}