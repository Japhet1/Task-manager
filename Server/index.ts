import express, { Express, Request, Response} from 'express'
import mongoose, { ConnectOptions } from 'mongoose';
//import bodyParser from 'body-parser';
import cors from 'cors';
import todoRoutes from './routes/todo.route';
import userRoutes from "./routes/user.route"
import categoryRoutes from "./routes/category.route"
import dotenv from 'dotenv';
// import path from 'path';
// import { fileURLToPath } from 'url';

dotenv.config();

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

const app: Express = express()

const PORT = process.env.PORT //|| 3000
const MONG_ATLAS = process.env.MONG_ATLAS as string
const MONG_COMPASS = process.env.MONG_COMPASS as string

if (!MONG_ATLAS) {
  throw new Error("MongoDB Atlas connection string is not defined in the environment variables");
}

// Middleware
//app.use(bodyParser.json());
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use(cors());

// app.use(express.static(path.join(__dirname, '/client/dist')))

// app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/client/dist/index.html')))

// app.get('/', (req: Request, res: Response) => {
//     res.send('Hello, Todo App!');
// });

// Use the todo routes
app.use('/api/todos', todoRoutes);
app.use('/api/users', userRoutes)
app.use('/api/categories', categoryRoutes)

mongoose.connect(MONG_COMPASS, {
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