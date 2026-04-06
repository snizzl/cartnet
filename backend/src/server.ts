import app from './app.ts';
import { connectDb, closeConnection } from './config/db.ts';
import http from 'http';

const PORT = process.env.PORT || 5000;
let server: http.Server | undefined;

async function shutdown(signal: string) {
  console.log(`Received ${signal}. Initiating graceful shutdown...`);

  if (!server) {
    console.log('Server not started, shutting down.');
    process.exit(0);
  }

  server.close(async (error) => {
    if (error) {
      console.error('Error closing Express server:', error);
      process.exit(1);
    }

    console.log('Express server closed.');

    await closeConnection();
    console.log('MongoDB connection closed.');

    process.exit(0);
  });

  const timeout = 10000;
  setTimeout(() => {
    console.error(`Forcing shutdown after timeout (${timeout/1000}s).`);
    process.exit(1);
  }, timeout);
}

async function start() {
  await connectDb();

  server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  process.on('SIGTERM', () => shutdown('SIGTERM'));
  process.on('SIGINT', () => shutdown('SIGINT'));
}

start();
