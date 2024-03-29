import express from 'express'
import router from './router'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'app')));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'app/home.html'));
});
app.use('/api', router)

export default app