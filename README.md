## CONFIGURATION DU BOT

Pour configurer le bot, vous devez télécharger le dossier complet, et l'extraire sur votre bureau.

Ensuite, vous ouvrez le dossier avec Visual Studio Code. Lien téléchargeable ![ici](https://code.visualstudio.com/download)

Dans la racine du dossier que vous venez d'ouvrir, vous avez un `.env`. Vous remplacez la valeur `A_CHANGER` par le **Token** de votre BOT.

Vous pouvez obtenir le token de votre bot en suivant [ce tutoriel](https://code-garage.fr/blog/tutoriel-creer-un-bot-discord-partie-1/)

## LANCEMENT DU BOT

Pour lancer le bot, vous devez ouvrir un terminal sur Visual Studio Code. Pour ce faire, vous allez dans l'onglet `Terminal` puis `Nouveau terminal`

Une fenêtre s'ouvre en bas de votre écran, tapez la commande suivante:
`node ./src/index.js`

Si vous avez suivi la première étape correctement, le bot vous répond normalement `User#XXXX connecté avec succès.`

Dans le cas où ça ne répond pas ça ou que le bot ne s'allume pas, veillez à mettre à jour NodeJS et NPM.