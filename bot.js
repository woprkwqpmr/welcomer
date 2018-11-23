bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("512388317925343242");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(` Welcome to !legends united :revolving_hearts: ${member}`), 4000)        
}
})
