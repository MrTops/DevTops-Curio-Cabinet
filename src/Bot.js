const { Client, Collection } = require("discord.js");
const { Token, DefaultPrefix } = require("../Config.json");
const { output } = require("./util/output");
const { readdir } = require('fs');

// Client init stuff

const client = new Client({
	disableMentions: 'everyone'
});

client.on('ready', () => {
	client.user.setPresence({
		activity: {
			name: 'cc.help',
			type: 'PLAYING'
		},
		status: 'online'
	});
	output('Bot Shard Ready');
});

// Load Commands

client.Commands = new Collection();
client.Aliases = new Collection();
readdir('./Src/Commands', {}, (err, files) => {
	if (err) output(err);
	output(`Loading ${files.length} commands`);
	files.forEach((file, index) => {
		output(`	#${index + 1} - ./Commands/${file}`);
		try {
			let loadedCommand = require(`./Commands/${file}`);
			let info = loadedCommand.info;
			client.Commands.set(info.command, loadedCommand);
			if (info.hasOwnProperty("alias")) {
				info.alias.forEach((alias, aindex) => {
					client.Aliases.set(alias, loadedCommand);
				});
			}
		} catch (error) {
			output(`	Error whilst loading: ${error}`);
		}
	});
});

// Handles possible command and executor

client.on('message', async message => {
	let Prefix = DefaultPrefix;
	if (!message.content.startsWith(Prefix)) return;

	let noPrefix = message.content.substr(Prefix.length);
	let args = noPrefix.split(' ');
	let command = args.shift().toLowerCase();
	
	let commandObject = client.Commands.get(command) || client.Aliases.get(command);
	if (commandObject) commandObject.exec(client, message, args);
});

// Login

client.login(Token).catch(reason => output);