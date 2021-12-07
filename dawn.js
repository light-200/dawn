require("dotenv").config();
const cr = require("./functions/checkReact.js");
const cmds = require("./functions/commands.js");
const convo = require('./functions/convo')
const { Client, Guild } = require("discord.js");
const { CoronaUpdates } = require("./functions/coronaUpdates.js");
const client = new Client();

const BOT_PREFIX = "-dawn";
let i = 0;
// function to change the bot status
const multiStatus = () => {
  let status = "myself";
  let animation = [
    "🕐",
    "🕑",
    "🕒",
    "🕓",
    "🕔",
    "🕕",
    "🕖",
    "🕗",
    "🕘",
    "🕙",
    "🕚",
    "🕛",
    "🕜",
    "🕝",
    "🕞",
    "🕟",
    "🕠",
    "🕡",
    "🕢",
    "🕣",
    "🕤",
    "🕥",
    "🕦",
    "🕧",
  ];

  if (i >= 24) i = 0;
  client.user.setActivity(status + animation[i], {
    type: "LISTENING",
  });
  i += 1;

  setTimeout(() => {
    multiStatus();
  }, 3000);
};

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);

  multiStatus();

  //coronaUpdates function
  CoronaUpdates(client);
});

client.on("message", (msg) => {
  /* commands center */
  //every sting will be checked for the words specified in checkReact.js
  cr.checkReact(msg);
  convo.replyText(msg);

  //real commands will be operated here
  //checking if the prefix is used
  if (msg.content.substr(0, BOT_PREFIX.length) == BOT_PREFIX) {
    //spliting msg into different parts
    const args = msg.content.substring(BOT_PREFIX.length).split(" ");

    //sending commands to be processed in command.js
    cmds.commands(msg);
  }
});

client.login(process.env.BOT_TOKEN);
