const express = require('express');
require('./db/mongoose')
const userRouter = require('./routers/User');
const taskRouter = require('./routers/Task');

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up and running on ', port);
})