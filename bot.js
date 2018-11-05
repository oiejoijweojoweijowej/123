const Discord = require('discord.js');
const bot1 = new Discord.Client();


bot1.on('ready', () => {
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${bot1.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${bot1.guilds.size} " ]`);
  console.log(`Users! [ " ${bot1.users.size} " ]`);
  console.log(`channels! [ " ${bot1.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
 

 bot1.on('message', message => {
  
  if (message.content === 'f-d') {
    if(!message.author.id == "505101712839671838") return message.reply(`Just <@505101712839671838> Can use us xD!`);

message.channel.send('#daily')
}
});


 bot1.on('message', message => {
  
  if (message.content === 'f-r') {
    if(!message.author.id == "505101712839671838") return message.reply(`Just <@505101712839671838> Can use us xD!`);

message.channel.send('#rep <@505101712839671838>')
}
});


bot1.on('message', message => {
if (message.content === '!spam') {
  if(!message.author.id == "505101712839671838") return message.reply(`Just <@505101712839671838> Can use us xD!`);
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send('1st Lover')
          .then(m => {
            count++;
          })

        }
      }
});


bot1.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`fs1 <words>`);
if (command == "fs1") {
  if(!message.author.id == "505101712839671838") return message.reply(`Just <@505101712839671838> Can use us xD!`);
message.channel.send(args.join("  "))
    message.delete();
  }
});



bot1.login(process.env.FB1);



///////////////////////////////////////////////////////////////////////////////////




const bot2 = new Discord.Client();
 bot2.on('message', message => {
  
  if (message.content === `f-d`) {
    if(!message.author.id == "505101712839671838") return message.reply(`Just <@505101712839671838> Can use us xD!`);

message.channel.send('#daily')
}
});

 bot2.on('message', message => {
  
  if (message.content === 'f-r') {
    if(!message.author.id == "505101712839671838") return message.reply(`Just <@505101712839671838> Can use us xD!`);

message.channel.send('#rep <@505101712839671838>')
}
});

bot2.on('message', message => {
if (message.content === '!spam') {
  if(!message.author.id == "505101712839671838") return message.reply(`Just <@505101712839671838> Can use us xD!`);
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send('2nd Lover')
          .then(m => {
            count++;
          })

        }
      }
});



bot2.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`fs2 <words>`);
if (command == "fs2") {
  if(!message.author.id == "505101712839671838") return message.reply(`Just <@505101712839671838> Can use us xD!`);
message.channel.send(args.join("  "))
    message.delete();
  }
});



bot2.login(process.env.FB2);

/////////////////////////////////////////////////////////////////////////////////////////


const bot3 = new Discord.Client();
 bot3.on('message', message => {
  
  if (message.content === 'f-d') {
    if(!message.author.id == "505101712839671838") return message.reply(`Just <@505101712839671838> Can use us xD!`);

message.channel.send('#daily')
}
});

 bot3.on('message', message => {
  
  if (message.content === 'f-r') {
    if(!message.author.id == "505101712839671838") return message.reply(`Just <@505101712839671838> Can use us xD!`);

message.channel.send('#rep <@505101712839671838>')
}
});

bot3.on('message', message => {
if (message.content === '!spam') {
  if(!message.author.id == "505101712839671838") return message.reply(`Just <@505101712839671838> Can use us xD!`);
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send('3rd Lover')
          .then(m => {
            count++;
          })

        }
      }
});




bot3.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`fs3 <words>`);
if (command == "fs3") {
  if(!message.author.id == "505101712839671838") return message.reply(`Just <@505101712839671838> Can use us xD!`);
message.channel.send(args.join("  "))
    message.delete();
  }
});


bot3.login(process.env.FB3);
