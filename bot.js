const Discord = require('discord.js');
const client = new Discord.Client();
client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("507985562930642944");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(` Welcome to !legends united :revolving_hearts: ${member}`), 4000)        
}
});
client.login(process.env.BOT_TOKEN);
