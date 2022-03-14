import { Pool } from "pg";

const connectionString = 'postgres://foabizbg:xxxxxxxxxxxxxx@motty.db.elephantsql.com/foabizbg';

const db = new Pool({ connectionString });

export default db
