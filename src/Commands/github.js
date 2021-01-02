const { MessageEmbed, MessageAttachment } = require("discord.js")
const { output } = require("../util/output")
const randomColor = require('randomcolor');

module.exports.exec = async (client, message, args) => {
	message.channel.send(new MessageEmbed()
		.setTitle("This bot IS open source")
		.setColor(randomColor({
			luminosity: 'bright'
		}))
		.setURL('https://github.com/MrTops/DevTops-Curio-Cabinet')
	).catch(err => output);
}

module.exports.info = {
	command: "github",
	alias: ["opensource", "src"]
}