import express from "express";
import dataRouter from "./routes/data.routes.js";
import cors from "cors";


const app = express();

app.use(cors({
    origin : "*"
}));


app.use(express.json());
app.use(express.urlencoded({ extended : true }));




app.use("/bhfl", dataRouter);

app.listen(9000, (err) => {
    if(err){
        console.error(`Error occurred while listening to the server : ${err}`);
    }
    else{
        console.log(`Server is listening at http://localhost:9000`);
    }
})