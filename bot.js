const Discord = require('discord.js');
const client = new Discord.Client();
client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("515208390855884831");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`Welcome`), 4000)        
}
});
 
client.login(process.env.BOT_TOKEN);
