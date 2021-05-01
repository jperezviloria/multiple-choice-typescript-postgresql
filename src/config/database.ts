import { Pool} from 'pg'

export const pool = new Pool({
    user:'usernameDB',
    host:'localhost',
    password:'passwordDB',
    database: 'sts',
    port: 5432
});