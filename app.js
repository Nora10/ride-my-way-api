// pascal case becos its a class Joi

import express, { json, urlencoded } from "express";

import { join } from "path";
import { json as _json, urlencoded as _urlencoded } from "body-parser";
import cookieParser from "cookie-parser";
import logger from "morgan";


const app = express();

import router from "./routes/routes";

// body parser middleware
app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

// set static path
// app.use(static(join(__dirname, 'public')));
// app.use(_json());
// app.use(_urlencoded({ extended: false }));
// app.use(_json({ type: 'application/json' }));

app.use('/api/v1', router);



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
export default app;
