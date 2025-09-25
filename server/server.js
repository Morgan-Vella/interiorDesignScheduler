import express from 'express' 
import dotenv from 'dotenv'
import cors from 'cors'
import dbConnect from './config/mongoose.config.js'
import yourRouter from './routes/example.routes.js'

dbConnect(); 

const app = express();
app.use(cors(), express.json())
dotenv.config();
const PORT = process.env.PORT;
app.use('/api', yourRouter);

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
}); 