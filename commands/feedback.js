const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: 'feedback',
  description: "eee",
  execute(message, args) {

    let questions = {
      firstQuestion: "**How long have you been a Member of Floofy Falls?**",
      secondQuestion: "**On a scale of 1-5, how has your experience been?**",
      thirdQuestion: "**On a scale of 1-5, how confident/comfortable are you coming to staff for help/assistance? **",
      fourthquestion: "**What are your current thoughts on the state of the server? **",
      fifthquestion: "**If you could change one thing about Floofy Falls, what would it be, and why?**",
      sixthquestion: "**In your own words, explain one thing the staff can improve on.**",
    }
    const boolvalue = db.get(`staffapps_`)
    
      message.channel.send("I have started this process in your DM's. Type `cancel` to cancel")
      message.author.send(questions.firstQuestion).then(msg => {
        const filter1 = m => m.author.id === message.author.id
        msg.channel.awaitMessages(filter1, {
          time: 5 * 120000,
          max: 1
        }).then(messages => {
          let msg1 = messages.first().content
          if (msg1.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
          message.author.send(questions.secondQuestion).then(msg => {
            const filter1 = m => m.author.id === message.author.id
            msg.channel.awaitMessages(filter1, {
              time: 5 * 120000,
              max: 1
            }).then(messages => {
              let msg2 = messages.first().content
              if (msg2.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
              message.author.send(questions.thirdQuestion).then(msg => {
                const filter1 = m => m.author.id === message.author.id
                msg.channel.awaitMessages(filter1, {
                  time: 5 * 120000,
                  max: 1
                }).then(messages => {
                  let msg3 = messages.first().content
                  if (msg3.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                  message.author.send(questions.fourthquestion).then(msg => {
                    const filter1 = m => m.author.id === message.author.id
                    msg.channel.awaitMessages(filter1, {
                      time: 5 * 120000,
                      max: 1
                    }).then(messages => {
                      let msg4 = messages.first().content
                      if (msg4.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                      message.author.send(questions.fifthquestion).then(msg => {
                        const filter1 = m => m.author.id === message.author.id
                        msg.channel.awaitMessages(filter1, {
                          time: 5 * 120000,
                          max: 1
                        }).then(messages => {
                          let msg5 = messages.first().content
                          if (msg5.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                          message.author.send(questions.sixthquestion).then(msg => {
                            const filter1 = m => m.author.id === message.author.id
                            msg.channel.awaitMessages(filter1, {
                              time: 5 * 120000,
                              max: 1
                            }).then(messages => {
                              let msg6 = messages.first().content
                              if (msg6.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                            
                                                  message.author.send("We wuv chu guys! <3").then(msg => {
                                                    message.client.channels.cache.get("865780990773559297").send("A new feedback thing has arrived!");
                                                    message.client.channels.cache.get("865780990773559297").send(

                                                      new Discord.MessageEmbed()
                                                        .setTitle('Feedback Submitted')
                                                        .setDescription(`This application was submitted by Anonymous (1).\nCreated: ${message.author.createdAt}`)
                                                        .addField(questions.firstQuestion, "Answer: " + msg1)
                                                        .addField(questions.secondQuestion, "Answer: " + msg2)
                                                        .addField(questions.thirdQuestion, "Answer: " + msg3)
                                                        .addField(questions.fourthquestion, "Answer: " + msg4)
                                                        .addField(questions.fifthquestion, "Answer: " + msg5)
                                                        .addField(questions.sixthquestion, "Answer: " + msg6)

                                                    )
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
