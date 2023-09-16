const mongoose=require('mongoose');
mongoose.connect(process.env.mongo_url);

const db=mongoose.connection;

db.on('connected',()=>{
    console.log("MongoDB Connection Successfull!");
});

db.on("error",()=>{
    console.log("MongoDB Connection Failed!");
});
