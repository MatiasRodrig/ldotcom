import express from "express"
import  router  from "./routes/posts.routes.js"

const app = express()
app.use(express.json())




// Routes

app.use(router)

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})