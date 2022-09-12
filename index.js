import express, { json } from "express";
import bodyParser from 'body-parser';
import rotas from "./api/rotas.js";


const app = express();
app.use(json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }))
app.set('json spaces', 4)

app.use("/", rotas);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`)
    if (PORT == 3000) console.log('rodando localmente em http://localhost:3000');
})
