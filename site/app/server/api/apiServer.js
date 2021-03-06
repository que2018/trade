import Express from 'express'
import config from '../../config/config'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
// import cookieParser from 'cookie-parser'
// import session from 'express-session'

const port = config.apiPort;
const app = new Express();
app.use(bodyParser.json());

// app.use(cookieParser('express_react_cookie'));
// app.use(session({
//     secret:'express_react_cookie',
//     resave: true,
//     saveUninitialized:true,
//     cookie: {maxAge: 60 * 1000 * 30}//过期时间
// }));


app.use('/user', require('./user'));

app.use('/admin', require('./admin'));

mongoose.Promise = require('bluebird');

mongoose.connect( process.env.MONGODB_URI ||`mongodb://${config.dbHost}:${config.dbPort}/Currency`, { useNewUrlParser: true } ,function (err) {
// mongoose.connect( 'mongodb://heroku_63w3spxm:bman6bohh381fs06da05r66k4h@ds255451.mlab.com:55451/heroku_63w3spxm', function (err) {
    if (err) {
        console.log(err, "Database disconnected");
        return;
    }
    console.log('Database connected successfully');

    app.listen(port, function (err) {
        if (err) {
            console.error('err:', err);
        } else {
            console.info(`===> api server is running at ${config.apiHost}:${config.apiPort}`)
        }
    });
});
