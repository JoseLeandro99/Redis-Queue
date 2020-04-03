import Queue from '../../lib/queue';

export default {
    async store(request, response) {
        const { name, email, password } = request.body;

        const user = { name, email, password };

        await Queue.add('RegistrationMail' ,{ user });
        await Queue.add('RegistrationReport', { user });

        return response.json(user);
    }
}