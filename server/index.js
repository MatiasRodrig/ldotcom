import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import postsRoutes from "./routes/posts.routes.js";
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js'
import { createRole } from "./libs/initialSetup.js";

dotenv.config();

const app = express();
app.use(express.json());
createRole();

// Routes

app.use('/api', authRoutes);
app.use('/posts', postsRoutes);
app.use('/users', userRoutes);
app.use('/', (req, res) => {
    res.send('Hello World!');
});

mongoose.connect(process.env.MONGO_URI, {

})
    .then(() => {
        console.log('Conectado a la base de datos');
        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`App funcionando en puerto ${port}!`);
        });
    })
    .catch((error) => {
        console.log(error);
    })
