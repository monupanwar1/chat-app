import dotenv from "dotenv";
dotenv.config();

const config = {
    PORT:process.env.PORT|| 5000,
    DATABASE_URL:process.env.DATABASE_URL||'mongodb://127.0.0.1:27017/elib',
    JWT_SECRET:process.env.JWT_SECRET

};

export default config;
