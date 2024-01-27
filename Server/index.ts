import express, { Express, Request, Response} from 'express'
import mongoose, { ConnectOptions } from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import todoRoutes from './todo.route';

const PORT = 8000

const app: Express = express()

mongoose.connect('mongodb://localhost:27017/todoapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);

// Middleware
app.use(bodyParser.json());

app.use(cors());

// app.get('/', (req: Request, res: Response) => {
//     res.send('Hello, Todo App!');
// });

// Use the todo routes
app.use('/todos', todoRoutes);

app.listen(PORT, () => {
    console.log(`listen on port ${PORT}`)
})