const { Command } = require('discord-akairo')

class PingCommand extends Command {
    constructor() {
        super('ping', {
            aliases: ['ping']
        });
    }
    async exec(message, args) {
        message.channel.send({ embeds: [{ description: `Pong !` }] })
    }
}

module.exports = PingCommand;