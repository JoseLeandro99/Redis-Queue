import mail from '../lib/mail';

export default {
    key: 'RegistrationMail',
    options: {
        delay: 5000
    },
    handle({ data }) {
        const { user } = data;

        mail.sendMail({
            from: 'GM <hi@game.u>',
            to: `${user.name} <${user.email}>`,
            subject: 'Bem Vindo',
            html: `Olá ${user.name}, bem vindo ao game.u! :)`
        });
    }
}