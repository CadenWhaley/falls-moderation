const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: 'sapp',
  description: "Start an staff applicaton",
  execute(message, args) {

    let questions = {
      firstQuestion: "**How long have you been in the server?**",
      secondQuestion: "**Have you ever been staff on a discord server before not counting your own or a personal friends server?**",
      thirdQuestion: "**Previous Staff Work for Discord servers?**",
      fourthquestion: "**A User just spammed and they were warned by another staff member already. What should you do?**",
      fifthquestion: "**Someone just broke the rules for their first time, what should you do?**",
      sixthquestion: "**A new user joins the server and immediately breaks a rule, what should you do?**",
      seventhquestion: "**A raid is happening in #Verify-Pending , what should you do as a moderator?**",
      eightquestion: "**A raid is happening within the server, as a moderator you don't have the ability to ban. What should you do?**",
      nienquestionlol: "**A verbal debate is happening in one of our text channels and it's looking like it's getting heated. What should be done?**",
      tenthquestion: "**Why do you think we should consider hiring you for staff? What can you bring to us as a team/family?**",
      elevenquestion: "**Do you accept the responsibility of actively being in our server and scanning out chats for rule-breaking?**",
    }
    const boolvalue = db.get(`staffapps_`)
    
    if (boolvalue == "true") {
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
                              message.author.send(questions.seventhquestion).then(msg => {
                                const filter1 = m => m.author.id === message.author.id
                                msg.channel.awaitMessages(filter1, {
                                  time: 5 * 120000,
                                  max: 1
                                }).then(messages => {
                                  let msg7 = messages.first().content
                                  if (msg7.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                                  message.author.send(questions.eightquestion).then(msg => {
                                    const filter1 = m => m.author.id === message.author.id
                                    msg.channel.awaitMessages(filter1, {
                                      time: 5 * 120000,
                                      max: 1
                                    }).then(messages => {
                                      let msg8 = messages.first().content
                                      if (msg8.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                                      message.author.send(questions.nienquestionlol).then(msg => {
                                        const filter1 = m => m.author.id === message.author.id
                                        msg.channel.awaitMessages(filter1, {
                                          time: 5 * 120000,
                                          max: 1
                                        }).then(messages => {
                                          let msg9 = messages.first().content
                                          if (msg9.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                                          message.author.send(questions.tenthquestion).then(msg => {
                                            const filter1 = m => m.author.id === message.author.id
                                            msg.channel.awaitMessages(filter1, {
                                              time: 5 * 120000,
                                              max: 1
                                            }).then(messages => {
                                              let msg10 = messages.first().content
                                              if (msg10.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                                              message.author.send(questions.elevenquestion).then(msg => {
                                                const filter1 = m => m.author.id === message.author.id
                                                msg.channel.awaitMessages(filter1, {
                                                  time: 5 * 120000,
                                                  max: 1
                                                }).then(messages => {
                                                  let msg11 = messages.first().content
                                                  if (msg11.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                                                  message.author.send("Thank you for submitting best of luck!").then(msg => {
                                                    message.client.channels.cache.get("862331779888447488").send("A new staff app has arrived!");
                                                    message.client.channels.cache.get("862331779888447488").send(

                                                      new Discord.MessageEmbed()
                                                        .setTitle('Staff Application Submitted')
                                                        .setDescription(`This application was submitted by ${message.author.tag} (${message.author.id}).\nCreated: ${message.author.createdAt}`)
                                                        .addField(questions.firstQuestion, "Answer: " + msg1)
                                                        .addField(questions.secondQuestion, "Answer: " + msg2)
                                                        .addField(questions.thirdQuestion, "Answer: " + msg3)
                                                        .addField(questions.fourthquestion, "Answer: " + msg4)
                                                        .addField(questions.fifthquestion, "Answer: " + msg5)
                                                        .addField(questions.sixthquestion, "Answer: " + msg6)
                                                        .addField(questions.seventhquestion, "Answer: " + msg7)
                                                        .addField(questions.eightquestion, "Answer: " + msg8)
                                                        .addField(questions.nienquestionlol, "Answer: " + msg9)
                                                        .addField(questions.tenthquestion, "Answer: " + msg10)
                                                        .addField(questions.elevenquestion, "Answer: " + msg11)

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
    else
    message.channel.send("Staff applications are off bud");
  }
}
