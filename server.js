const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')

dotenv.config()
app.get('/',(req,res) => {
    res.send('hello');
});
const PORT= process.env.PORT|| 4000;
mongoose.connect(process.env.DATABASE_ACCESS, () =>console.log("Database connected"))

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))