const Discord = require("discord.js");
module.exports = {
    name: 'server',
    Description: 'Does a ssu',
    execute(message, args) {
        if (message.member.hasPermission("KICK_MEMBERS")) {
            message.delete()
        message.channel.send(`@here`)
        const helpcommand = new Discord.RichEmbed()
                .setTitle('SSU IS NOW HAPPING!')
                .setColor(0x800000)
                .setDescription('A ssu has just started please join up if you can. Go have some fun!')
                .addField(`Host: ${message.author.username}`,'Link: https://www.roblox.com/games/6717639345/State-Of-Tasmania-V2')
                .addField('**Reminder staff will be on so**','**Follow the rules**')
                
                
                .setFooter('Thanks for choseing sot!')
                
                .setTimestamp()
            message.channel.send(helpcommand)


        
    }else{
        message.channel.send('You do not have perms to do this command!')
    }
}

}
