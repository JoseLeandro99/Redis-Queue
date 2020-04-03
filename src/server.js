import 'dotenv/config';
import express from 'express';
import routes from './routes';
import BullBoard from 'bull-board';
import Queue from './lib/queue';

const app = express();

BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(express.json());
app.use(routes);

app.use('/admin/tasksMonitoring', BullBoard.UI)

app.listen(process.env.PORT, () => {
    console.log('Server running');
});