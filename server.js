import express from 'express';
import cors from 'cors';
import { readAll } from './crud.js';

const app = express();

const hostname = 'localhost';
const port = 5000;

app.use(express.json());
app.use(cors());

app.get("/mentor-student/", function (req, res) {
    res.send(readAll());
});

app.listen(port, hostname, () => {
    console.log(`Server Running at http://${hostname}:${port}`);
})