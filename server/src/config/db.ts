import sql from 'mssql';
import dotenv from 'dotenv';

dotenv.config();

console.log('ENV CONFIG:', {
  user: process.env.DB_USER,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
});

const config: sql.config = {
  user: process.env.DB_USER || '',
  password: process.env.DB_PASSWORD || '',
  server: process.env.DB_SERVER || 'localhost',  // <- this must not be undefined
  database: process.env.DB_NAME || '',
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

export const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('✅ Connected to SQL Server');
    return pool;
  })
  .catch(err => {
    console.error('❌ DB Connection Failed:', err);
    throw err;
  });
