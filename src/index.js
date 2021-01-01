const { ShardingManager } = require("discord.js");

const shardingManager = new ShardingManager("./Bot.js");

shardingManager.on('shardCreate', async (shard) => {
	
})