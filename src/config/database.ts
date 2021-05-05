import { Pool} from 'pg'

export const pool = new Pool({
    user:'userdb',
    host:'localhost',
    password:'passdb',
    database: 'sts',
    port: 5432
});