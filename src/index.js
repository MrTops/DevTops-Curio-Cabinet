const { ShardingManager } = require("discord.js");
const { Token } = require('../Config.json');
const { output } = require("./util/output");

const shardingManager = new ShardingManager("./src/Bot.js", {
	token: Token
});

shardingManager.spawn().catch(reason => output);