import  express  from "express";
import router from "./router/index.js";
const app = express()

app.use(express.json())

app.use(router)

app.listen(3000,()=>{
    console.log(`serveur lancer sur le port ${3000}`);
})