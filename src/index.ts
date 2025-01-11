import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import {routes} from './routes/index'
import bodyParser = require('body-parser');
//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use("/", routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});