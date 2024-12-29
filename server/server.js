const express=require("express")
const cors=require("cors")
const app=express()
const corsOptions=require("./config/corsOptions")
const PORT=process.env.PORT||1100

app.use(cors(corsOptions));
app.use(express.json())
app.use("/books",require("./routes/book"))
app.use("/pepole",require("./routes/pepole"))
app.use("/comps",require("./routes/comp"))

app.listen(PORT,()=>{
    console.log(`the server run in port ${PORT}`)
})

