const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");

module.exports = {
  name: "vote",
  aliases: ["v"],
  description: "vote Command!",
  usage: "Help | <Command Name>",
  run: async(client, message, args) => {
    
    message.delete();
    
    let embed = new MessageEmbed()
    .setColor(Color)
    .setTitle(`${client.user.username} vote us on top.gg`)
    .addField(`**Links!**`, `**[Vote us on top.gg](vote link of top .gg here) • [vote us on dbl.com](vote link of dbl.com here) • [Invite](invite link here)**`)
    .setFooter(`Requested By ${message.author.username}`)
    .setTimestamp();
    
    if (!args.length) return message.channel.send(embed);

    let cmd =
      client.commands.get(args[0].toLowerCase()) ||
      client.commands.get(client.aliases.get(args[0].toLowerCase()));

      setTimestamp();

    if (cmd) {
      return message.channel.send(embed2);
    } else {
      return message.channel.send(embed);
    }
  }
};
