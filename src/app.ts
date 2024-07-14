import express from 'express';
import UserController from './controllers/user_con';
import session from 'express-session';
import cors from 'cors';
import 'dotenv/config'
const app = express();
const port = process.env.PORT

const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors());
app.use(express.json());
app.use(session({
    secret: 'secretsessionheadlessapi',
    saveUninitialized : true,
    resave : false,
    cookie: { secure : true}
}));
app.use('/api',UserController);


app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

