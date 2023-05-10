const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({path : "backend/config/config.env"});

process.on("UncaughtException",(err)=>{
    console.log(`Error : ${err.message}`);
    console.log("Server shutting down due to uncaught exception.");
});

const connectDb = require("./config/database");
connectDb();

const Port  = process.env.PORT || 4000;

const server = app.listen(Port,()=>{
    console.log(`Server running on http://localhost:${process.env.PORT}`);
})

process.on("UnhandledRejection",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to unhandled promise rejection.");

    server.close(()=>{
        process.exit();
    })
})