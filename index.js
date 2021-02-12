const Discord = require('discord.js')
const client = new Discord.Client();const MessageEmbed = new Discord.Client()
const token = "";
const PREFIX = ".";
client.commands = new Discord.Collection();
client.modCommands = new Discord.Collection();



function handler(message) {
  const [command, ...args] = message.content.substring(PREFIX.length).split(" ");

  switch (command) {
    case "emote":
      handleEmote(message, args);
      break;

    case "fun":
      handlefun(message, args);
      break;

    case "help":
      handleHelp(message, args);
      break;
    case "mod":
      handleMod(message, args);
      break;
  }
}
  
function handleEmote(message, args) {
    switch (args[0]) {
      case "deepdab":
        const DEEPDABattachment = new MessageAttachment('https://thumbs.gfycat.com/ComplicatedQueasyArchaeocete-max-1mb.gif')
        message.reply("deep dabs. Get dabbed on, hater!", {files: [DEEPDABattachment]});
        message.delete()
      break;
  
      case "brutaldab":
        const BRUTALDABattachment = new MessageAttachment('~-~-~-~-~-~-~-')
        message.reply("brutal dabs. Robots have feelings, too!", {files: [BRUTALDABattachment]});
        message.delete()
      break;

      case "swolecat":
        const SWOLECATattachment = new MessageAttachment('~-~-~-~-~-~-~-')
        message.reply("has flexed their feline muscles. What a ripped cat, jeeze!", {files: [SWOLECATattachment]});
        message.delete()
      break;
    
      case "infinidab":
        const INFINIDABattachment = new MessageAttachment('https://i.redd.it/kauz38ph36221.gif')
        message.reply("Has infinity dabbed. Give some encouragement, this is gonna be a while!", {files: [INFINIDABattachment]});
        message.delete()
      break;
        default:
          message.reply("That's not a valid command! Check .help commands for list of commands!")
  }
}   

function handlefun(message, args) {
  switch (args[0]) {
    case "spamQuestion":
      message.channel.send("Good question.")
      message.channel.send("Good question.")
      message.channel.send("Good question.")
      message.channel.send("Good question.")
      message.channel.send("Good question.")
      message.channel.send("Good question.")
      message.channel.send("Good question.")
      message.delete()
      break;

    case "kindasus":
      message.channel.send("ngl kinda sus")
      message.delete()
      break;

    case "controllerplayer":
      message.channel.send("It's a controlla' playa'!!")
      message.delete()
      break;

    case "youbot":
      message.channel.send("You're such a bot! OOOOOOOh!")
      message.delete()
      break;

    case "youdied":
      const YOUDIEDattachment = new MessageAttachment('./Images/youdied.png')
      message.channel.send("oof", {files: [YOUDIEDattachment]});
      message.delete()
    break;

    case "victoryroyale":
      const VICTORYattachment = new MessageAttachment('./Images/victoryRoyale.jpg')
      message.reply("has won at an online game, congrats, you get nothing.", {files: [VICTORYattachment]});
      message.delete()
    break;
    
    default:
      message.reply("That's not a valid command! Check .help commands for list of commands!")
  }
}


function handleHelp(message, args, Discord) {
  switch(args[0]) {
    case "commands":
      const newEmbed = new MessageEmbed()
        .setColor('#A0CF8D')
        .setTitle('Commands')
        .setDescription('Here are all the poosible commands and how to execute them')
        .addFields(
            {name: 'Emote: Deep Dab', value: '.emote deepdab'},
            {name: 'Emote: Brute Dab', value: '.emote brutaldab'},
            {name: 'Emote: Swole Cat', value: '.emote swolecat'},
            {name: 'Emote: Infinate Dab', value: '.emote infinidab'},
                )
        .addFields(
            {name: 'Fun: Spam Question Message', value: '.fun spamQuestion'},
            {name: 'Fun: Kinda Sus Message', value: '.fun kindasus'},
            {name: 'Fun: Controller Player Message', value: '.fun controllerplayer'},
            {name: 'Fun: You Bot Message', value: '.fun youbot'},
            {name: 'Fun: You Died Message', value: '.fun youdied'},
            {name: 'Fun: Victory Royale Message', value: '.fun victoryroyale'}
                  )
        .setFooter('Message the dev Slimey#7690 for any suggestions, support, or bug reports!')
    
        message.channel.send(newEmbed)
        message.delete()
  }

}

function handleMod(message, args) {
  switch(args[0]) {
    case "mute":
      client.modCommands.get('mute');
      break;
    case "unmute":
      client.modCommands.get('unmute');
      break;
  }
}


client.on('ready', () => {
  console.info(`${client.user.tag} has logged in! Get ready for some serious gaming!`);
  client.user.setActivity('Raging in Fortnite', { type: `PLAYING`}).catch(console.error);
})

  client.on("message", (message) => handler(message));
  client.login(token)
