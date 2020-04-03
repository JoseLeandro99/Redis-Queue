import Queue from 'bull';
import redisConfig from '../config/redis';

import * as jobs from '../jobs';

const queues = Object.values(jobs).map(job => ({
    bull: new Queue(job.key, redisConfig),
    name: job.key,
    options: job.options,
    handle: job.handle
}));

export default {
    queues,
    add(name, data) {
        const queue = this.queues.find(queue => queue.name === name);

        return queue.bull.add(data, queue.options);
    },
    proccess() {
        return this.queues.forEach(queue => {
            queue.bull.process(queue.handle);

            queue.bull.on('failed', (job, err) => {
                console.log(`An error ocurred in ${queue.key}: details: ${job.data}`);
                console.log(err);
            });
        });
    }
}