import express from 'express'
import cors from 'cors'
import pokemonRouter from './pokemonRoute.ts';

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res)=> {
    res.send('Hello World!')
})

app.use("/", pokemonRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })