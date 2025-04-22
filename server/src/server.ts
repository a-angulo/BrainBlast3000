import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url'; 
import db from './config/connection.js';
import routes from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

await db();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../client/dist')));
    
}

app.use(routes);
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});
