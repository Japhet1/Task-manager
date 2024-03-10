import express, { Express, Request, Response} from 'express'
import mongoose, { ConnectOptions } from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import todoRoutes from './todo.route';
import userRoutes from "./user.route"
import categoryRoutes from "./category.route"

const PORT = 8000

const app: Express = express()



// Middleware
app.use(bodyParser.json());

app.use(cors());

// app.get('/', (req: Request, res: Response) => {
//     res.send('Hello, Todo App!');
// });

// Use the todo routes
app.use('/api/todos', todoRoutes);
app.use('/api/users', userRoutes)
app.use('/api/categories', categoryRoutes)

mongoose.connect('mongodb://localhost:27017/todoapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.listen(PORT, () => {
    console.log(`listen on port ${PORT}`)
})