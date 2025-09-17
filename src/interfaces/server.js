import express from "express";
import tiqueteraRoutes from "../infrastucture/routes/tiqueteraRoutes.js";
const app = express();


app.use(express.json());


app.use("/", tiqueteraRoutes);


export default app;