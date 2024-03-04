import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Routes from "./routes/route.js";
import { dbconnection } from "./Database/dbconnection.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json({ limit: '10mb' }));
app.use(cors());

//db connection
dbconnection();


app.get("/",(req,res)=>{

return res.status(200).send("E-commerce backend working")
})


app.use('/', Routes);


//listen the port
app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`);
});
