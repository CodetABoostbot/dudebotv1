require("dotenv").config()
const fs = require("fs")
const { REST } = require("@didscordjs/rest")
const { Routes } = require("discord-api-types/v9")
const commands = []

const commandFiles = fs.readdirSync("./src/commands").filter(file => file.endsWith(".js"))

commandFiles.forEach(commnadFile =>{
    const command = require(`./commands/${CommandFile}`)
    commands.push(command.data.toJSON())
})


const restClient = new REST({version: "9"}).setToken(process.env.DISCORD_BOT_TOKEN)


restClient.put(Routes.applicationGuildCommands(process.env.DISCORD_APPLICATION_ID, DISCORD_GUILD_ID),
{body: commands})
.then(() => console.log("Sucessfully registerd Commands"))
.catch(console.error)