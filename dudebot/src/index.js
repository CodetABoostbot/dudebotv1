require("dotenv").config()
const { Client } = require("discord.js")
const { once } = require("nodemon")

const client = new Client ({intents: []})

client.once("ready", () => {
    console.log(`Ready! Logged in as ${client.user.tag}! I'm on ${client.guilds.cache.size} guilds(s)!`)
    client.user.setActivity({name: "Mit dem Code", type: "PLAYING",})
})



client.login(process.env.DISCORD_BOT_TOKEN)