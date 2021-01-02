const { MessageEmbed, MessageAttachment } = require("discord.js")
const { output } = require("../util/output")
const randomColor = require('randomcolor');
const { createCanvas } = require("canvas");

module.exports.exec = async (client, message, args) => {
	let color = randomColor({
		hue: args[0] || ''
	})
	let canvas = createCanvas(300, 100);
	let ctx = canvas.getContext('2d');
	ctx.fillStyle = `${color}`;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.font = 'bold 40pt Sans';
	ctx.textAlign = 'center';
	ctx.fillStyle = '#fff';
	ctx.fillText(color, canvas.width/2, canvas.height/1.5);
	message.channel.send(new MessageEmbed()
		.setColor(color)
		.setFooter(`copy: ${color}`)
		.attachFiles(new MessageAttachment(canvas.toBuffer(), 'buffered.png'))
		.setImage('attachment://buffered.png')
	).catch(err => output);
}

module.exports.info = {
	command: "randomcolor"
}