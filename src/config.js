import dotenv from "dotenv";
// This will load the .env file - if it exists - and set the key/values into your process.env
// https://www.npmjs.com/package/dotenv
dotenv.config();

const NODE_ENV_DEVELOPMENT = "development";
const NODE_ENV = process.env.NODE_ENV || NODE_ENV_DEVELOPMENT;

console.log(`Using NODE_ENV: ${NODE_ENV}`);

const CONFIG = {
  env: NODE_ENV,
  port:
    process.env.SERVER_PORT ||
    "DID YOU FORGET TO SET THIS UP IN YOUR ENVIRONMENT OR .env FILE?",
  secretThing:
    process.env.SECRET_THING ||
    "DID YOU FORGET TO SET THIS UP IN YOUR ENVIRONMENT OR .env FILE?",
};

export default CONFIG;
