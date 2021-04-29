import { Pool} from 'pg'

export const pool = new Pool({
    user:'protouser',
    host:'localhost',
    password:'passuser',
    database: 'sts',
    port: 5432
});