import express from "express"
import authRouter from "./routes/authRouter.js"
import cors from "cors"


const app = express();
app.use(express.json())

app.use(cors())


app.use("/", authRouter)

export default app;