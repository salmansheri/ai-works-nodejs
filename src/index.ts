import express from 'express'; 
import cors from 'cors'; 
import * as dotenv from 'dotenv'; 
dotenv.config(); 
import Search from './routes/search.ts';

const app = express(); 

app.use(cors()); 
app.use(express.json()); 





app.use("/search", Search); 

app.listen(process.env.PORT, () => {
    console.log(`Server listening on Port http://localhost:${process.env.PORT}`)
})