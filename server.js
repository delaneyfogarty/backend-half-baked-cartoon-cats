const app = require('./lib/app');
const pool = require('./lib/utils/pool');

const API_URL = process.env.API_URL || 'http://localhost';
const PORT = process.env.PORT || 5432;

app.listen(PORT, () => {
  console.log(`🚀  Server started on ${API_URL}:${PORT}`);
});

process.on('exit', () => {
  console.log('👋  Goodbye!');
  pool.end();
});
