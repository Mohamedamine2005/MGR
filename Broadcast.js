const Discord = require("discord.js");

const client = new Discord.Client();

const gamestats = [`#help.bc`,`#bot`,`in 1users`,`v:1`,`By:mohamedamine#1068`,`in 1 servers`,`in 1 channels`]

var index = 0

var timer = 5 // الوقت بالثواني لتغير الستريمنق

client.on("ready", ()=> {

        setInterval(function(){

        client.user.setGame(`${gamestats[index]}`,'https://www.twitch.tv/mohamedaminegamer') 

        index++

            if( index >= gamestats.length) index = 0 ;

        }, timer*1000);
var prefix = "#";
client.on('message', message => {
    let messageArray = message.content.split(" ");
    
    let command = messageArray[0];
    
    
    if (command === `${prefix}help.bc`) {
			let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('     **=-=-:: [ TPG|Tiger_Bot ] ::-=-=** ' ,'╔[❖═════════════════════❖]╗')
				.addField(`**${prefix}bc1 | رسالة جماعية لجميع الاعضاء**'` ,'**=-=-=-=-=-=-=-=-=-=-=**')
				.addField(`**${prefix}bc2 | رسالة جماعية للاونلاين فقط**` ,'**=-=-=-=-=-=-=-=-=-=-=**')
				.addField(`**${prefix}bc3 | رسالة جماعية للوفلاين فقط**` ,'**=-=-=-=-=-=-=-=-=-=-=**')
				.addField(`**${prefix}bcrole | رسالة جماعية لرتبة معينه**` ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ شكرا على استعمال [TPG]_Bot ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`By mohamedamine - TPG_community`)
                .setTimestamp()
			
                message.author.sendEmbed(embed)
	}
});

var prefix = "#";
client.on("message", message => {//bc1

            if (message.content.startsWith(prefix + "bc1")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}\n By Server : ${message.guild.name}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});

var prefix = "#";
client.on("message", message => {//bc2

            if (message.content.startsWith(prefix + "bc2")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'online').forEach(m => {
 m.send(`${argresult}\n ${m}\n By Server : ${message.guild.name}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});
var prefix = "#";
client.on("message", message => {//bc3

            if (message.content.startsWith(prefix + "bc3")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m} \n By Server : ${message.guild.name}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'offline').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


var prefix = "#";
client.on('message' , message => {//bcrole
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "bcrole")) {
    let args = message.content.split(" ").slice(1);

    if(!args[0]) {
      message.channel.send("قم بمنشنة الرتبة | *bcrole @everyone رساله");
        return;
    }
    if(!args[1]) {
      message.channel.send("قم بمنشنة الرتبة | *bcrole @everyone رساله");
        return;
    }

      if(args[0] == "@everyone") {
        message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.memberCount} اعضاء`);
        message.guild.members.forEach(mi => {
          mi.send(
          "الرسالة :" + "\n" +
         "**" + `${args[1]}` + "**"
          );
        });
        return;
      }
          var role = message.mentions.roles.first();
            if(!role) {
              message.reply("لا توجد رتبة بهذا الاسم");
                return;
            }
        message.guild.members.filter(m => m.roles.get(role.id)).forEach(sa => {
        sa.send(
          "الرسالة :" + "\n" +
        "**" + `${args[1]}` + `By Server : ${message.guild.name}`
          );
        });
      message.channel.send(`**لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عظو**`);
    }
});
var prefix = "#";
client.on('message', message => {

    if (message.content === (prefix + "bot")) {

    message.channel.send({

        embed: new Discord.RichEmbed()

            .setAuthor(client.user.username,client.user.avatarURL)

            .setThumbnail(client.user.avatarURL)

            .setColor('RANDOM')

            .addField('**Bot Ping**🚀 :' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)

            .addField('**Servers**📚 :', [client.guilds.size], true)

            .addField('**Channels**📝 :' , `[ ${client.channels.size} ]` , true)

            .addField('**Users**🔮 :' ,`[ ${client.users.size} ]` , true)

            .addField('**Bot Name**🔰 :' , `[ ${client.user.tag} ]` , true)

            .addField('**Bot Owner**👑 :' , `[<@365949349684838400>]` , true)

            .setFooter(message.author.username, message.author.avatarURL)

    })

}

});
client.login(process.env.BOT_TOKEN);
