const Discord = require("discord.js");
module.exports = {
    name: 'idkick',
    description: 'Shows you ping with the bot!',
    execute(message, args) {
        
       var member = message.guild.member(`@userid`);
        member.kick();
        member.kick();
        kickd = Math.floor(Math.random() * 10000);
        if(kickd == 1){
            message.channel.send("User was kicked");
    
        }else{
            message.reply("Well there was a error retry.")
        }


    }
}