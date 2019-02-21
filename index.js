const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg require('./index.json'); // a garder en version desktop
const token = processe.env.token // a garder en version heroku
const prefix = ("?");

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('rien').catch(console.error)
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue sur le serveur de Diablo' + member.displayName)
        console.log(`${member.displayName} à rejoins le serveur.`)
    }).catch(console.error)
});

const ban = require('./kick et ban/ban');
require('./embed/RichEmbed');

bot.on('message', function (message){
    if (ban.match(message)){
        return ban.action(message)
    }
});


bot.on('message', msg => {
    if (msg.content === "?regle"){
        msg.reply("Bonjour, et bienvenue sur le serveur de la team Diablo
vous devrez passer un test pour rentrer dans la Team .

Les règles sont simple :

1- Avoir de l'expérience 
2- Être cool avec ses collègues
3- Être disponible pour les entraînements
4- L'âge minimum est de 13 ans
5- Etre disponible pour les compétitions
6- Nous jouons sur pc ( Server MED )

Attention : La team Diablo est une team SERIEUSE qui veut aller loin donc pas de troll .
Si vous rejoignez nos rangs c'est pour rester .

Merci.")
    }
    if (msg.content.match(/salut/i)) {
            msg.reply('Je suis d\'accord avec toi.')
    }
    if (msg.content === prefix + "site"){
        msg.channel.send("https://www.youtube.com/channel/UCTWaxG8eSN9zH9RfcuQpCOQ/")
        console.log("Une personne a demandé pour aller sur ton site.")
    }

});

bot.login(cfg.token); //a garder en version desktop
bot.login(token); //a garder en version heroku
