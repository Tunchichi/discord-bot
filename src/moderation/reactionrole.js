const { SlashCommandBuilder } = require('@discorjs/builders');
const { PermissionBitField, ButtonStyle, ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
    .setName('reactrole')
    .setDescription('')
    .addRoleOptions(option => option.setName(`role1`).setDescription(``).setRequired(true))
    .addRoleOptions(option => option.setName(`rolle2`).setDescription(``).setRequired(true))
    .addRoleOptions(option => option.setName(``).setDescription(``).setRequired(true))
    .addRoleOptions(option => option.setName(``).setDescription(``).setRequired(true))
    .addRoleOptions(option => option.setName(``).setDescription(``).setRequired(true)),
    async excute (interaction, client) {

        const Valorant = interaction.options.getRole(`role1`);
        const Minecraft = interaction.options.getRole(`role2`);




        if (!interaction.member.permissions.has(PermissionBitField.Flags.Administrator)) return await interaction.reply({ content: "You must have admi perms to create a reaction role messga", ephemeral: true});

        const button = new ActionRowBulder()
        .addComponents(
            new ButtonBuilder()
            .setCustomID(`button1`)
            .setLabel(`${Vrole1.name}`)
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setCustomID(`button2`)
            .setLabel(`${role2.name}`)
            .setStyle(ButtonStyle.Secondary),
        )

        const embed = new EmbedBuilder()
        .setColor("Blue")
        .setTitle(`Reactoions Roles`)
        .setDescription(`React with the Selou to get the specified roles! (${role1}, ${role2})`)
    
        await interaction.reply({ embeds: [embed], components: [button] });

        

    }
}