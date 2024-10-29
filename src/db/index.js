import creditionals from "./creditionals.js";
import pkg from "pg";
const { Pool } = pkg;
const db = new Pool(creditionals);

export default db;
