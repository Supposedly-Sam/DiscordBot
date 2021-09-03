// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client()

const config = require('./config.json')

const { nextLaunch } = require('./SpaceXApi.js')

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
    console.log('Ready!')
});


client.on('message', message => {
    if (message.content.startsWith(config.prefix)) {
        switch (message.content.substring(1).toLowerCase()) {
            case "next":
                nextLaunch().then( data => {
                    message.channel.send(
`Launch Name: ${data.mission_name}
Launch Window: ${data.launch_date_utc} (UTC)
Launch Vehicle: ${data.rocket.rocket_name} ${data.rocket.rocket_type}
Launch Site: ${data.launch_site.site_name}
Launch Description: ${data.details}`)
                })
                break
            case "beep":
                message.channel.send('Boop.')
                break
        }
    }
});

// login to Discord with your app's token
client.login(config.token)