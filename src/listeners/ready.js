const { Listener } = require('discord-akairo')

class ReadyListener extends Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            event: 'ready'
        });
    }

    exec(c) {
        console.log(`${c.user.tag} connecté avec succès.`);
    }
}

module.exports = ReadyListener;