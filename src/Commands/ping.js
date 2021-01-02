const { MessageEmbed } = require("discord.js");
const { output } = require("../util/output");
const randomColor = require("randomcolor");

module.exports.exec = async (client, message, args) => {
	message.channel.send(new MessageEmbed()
		.setColor(randomColor({
			hue: 'green',
			luminosity: 'light'
		}))
		.setTitle('🏓 Ping')
		.setTimestamp()
	).catch(err=>output)
};

module.exports.info = {
	command: "ping",
	alias: ["pong"]
};