import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "../constants"

const connect_to_db = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`[db] Connection to MongoDB done\n[db] Connected to host : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("[db] There was a error connecting to the database");
        console.error(error);
    }
};

export default connect_to_db;