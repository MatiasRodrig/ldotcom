import express from "express"
import  postsRoutes  from "./routes/posts.routes.js"
import authRoutes from './routes/auth.routes.js'



const app = express()
app.use(express.json())




// Routes

app.use('/', (req, res) => {
    res.send('Inicio')
})
app.use('/posts', postsRoutes)
app.use(authRoutes)


app.listen(3000, () => {
    console.log('App funcionando en puerto 3000!')
})