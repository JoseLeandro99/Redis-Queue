export default {
    key: 'RegistrationReport',
    options: {
        delay: 7000
    },
    handle({ data }) {
        const { user } = data;

        console.log(user);
    }
}