const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
    data: new SlashCommandBuilder().setName("Test").setDescription("Testing Interaction"),
    async execute(interaction) {
        interaction.reply("Sucess!")
    }
}