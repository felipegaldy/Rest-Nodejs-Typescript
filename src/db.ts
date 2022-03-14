import { Pool } from "pg";

const connectionString = 'postgres://foabizbg:mcJ37X6yUptTxfNtwwXU95Dh2op9cYMk@motty.db.elephantsql.com/foabizbg';

const db = new Pool({ connectionString });

export default db