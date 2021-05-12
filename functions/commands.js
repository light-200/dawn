const { MessageEmbed } = require("discord.js");

exports.commands = (msg) => {
  const args = msg.content.split(" ").slice(1);
  const embed = new MessageEmbed();

  switch (args[0]) {
    case "views":
      let view = args.slice(1).join(" ");
      embed
        .setAuthor(msg.author.username)
        .setTitle("poll started")
        .setDescription(view);
      console.log("howw");
      msg.delete().catch(console.error);
      msg.channel.send(embed).then((message) => {
        message.react("👍🏾");
        message.react("👎🏾");
      });
      break;

    default:
      embed.setDescription(`hey ${msg.author} how are you?`);
      msg.channel.send(embed);
      break;
  }
};
