import mongoose from "mongoose";

const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI as string,{
            dbName : "Yummy",
        });
        console.log("Connected to MongoDB Database");
    }catch(err){
        console.log("Error connecting to MongoDB", err);
        }
    };



export default connectDb;




// LJ6O22tCNTP3QyWF


// 81arvindarora_db_user