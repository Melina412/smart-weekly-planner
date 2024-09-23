import { app } from './src/app';
import { connectDB } from './src/config/db.config';
import 'dotenv/config';

const PORT = process.env.PORT;

app.listen(PORT, () => {
  connectDB(), console.log('✅ express server on port', PORT);
});
