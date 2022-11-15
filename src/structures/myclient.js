require('dotenv').config()

const { AkairoClient, CommandHandler, ListenerHandler } = require('discord-akairo')
let db = require('../util/prefix.json')

const chalk = require('chalk') 

module.exports = class myclient extends AkairoClient {
    constructor(config = {}) {
        super(
            {
                allowedMentions: { 
                    parse: ['roles', 'users', 'everyone'],
                    repliedUser: false
                },
                partials: ['CHANNEL', 'GUILD_MEMBER', "MESSAGE", 'REACTION', 'USER'],
                intents: 32767
            }
        )
        this.commandHandler = new CommandHandler(this, {
            allowMention: true,
            prefix: db.PREFIX,
            defaultCooldown: 1000,
            directory: './src/commands/'
        });

        this.listenerHandler = new ListenerHandler(this, {
            directory: './src/listeners/'
        })
    }
    async init() {
        this.commandHandler.useListenerHandler(this.listenerHandler);
        this.listenerHandler.setEmitters({ commandHandler: this.commandHandler });
        this.commandHandler.loadAll();
        this.listenerHandler.loadAll();
        console.log(`| ${this.commandHandler.modules.size} commandes ont été chargées |`)
        console.log(`| ${this.listenerHandler.modules.size} evènements ont été chargées |`)
        console.log("---------------------------------")
    }
    async start() {

        if(process.env.TOKEN === "A_CHANGER")
        {
            console.log(chalk.black.bgRed(' WARNING ') + ' Vous devez modifier le TOKEN du BOT avant de vouloir l\'executer');
            process.exit();
        }

        await this.init();
        return this.login(process.env.TOKEN);
    }
}