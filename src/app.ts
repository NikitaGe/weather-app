import express from 'express';
import UserController from './controllers/user_con';
import session from 'express-session';
import cors from 'cors';
import 'dotenv/config'
import path from 'path';
const app = express();
const port = process.env.PORT


const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use("/css",express.static("./node_modules/bootstrap/dist/css"));
app.use("/js",express.static("./node_modules/bootstrap/dist/js"));

app.use(cors());
app.use(express.json());
app.use(session({
    secret: 'secretsessionheadlessapi',
    saveUninitialized : true,
    resave : false,
    cookie: { secure : true}
}));
app.use('/api',UserController);


app.get('/', async(req, res) => {
  try {
      //let data = req.body
      //let test = await UserServices.CompareLogin(data);
      res.render("index");
  }catch(err) {
      res.status(400).send(err);
  }
})


app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

