import express from 'express';
import cors from 'cors';

const app = express();
app.get('/',(req ,res) => {
    res.send("Backend is running successfully");
})

app.listen(5000,()=> {
    console.log("server started on port 5000");
});