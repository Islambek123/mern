const express = require('express');
const passport = require('passport');
const session = require('express-session');

const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const cors = require('cors');


const flash = require('connect-flash');

const PORT = process.env.PORT || 4000;

const config = require('./config/database');
const connection = mongoose.connection;

//check for db errors
connection.on('error', function(err){
    console.log(err)
});

// app.use(require('connect-flash')());
require('./config/passport');

const app = express();


//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

app.get('*', function(req, res, next){
    res.locals.user = req.user || null;
    next();
});

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());


app.use(flash());
//Passport config
require('./config/passport')(passport);
// require('./config/passport')(passport);



let users = require('./routes/auth');
app.use('/user', users);
//mongoose
mongoose.connect(config.database, { useNewUrlParser: true });

connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});

//always first
// const express = require('express');
// var mongoose = require('mongoose');
// const config = require('./config/database');
// require('./config/passport');


// const connection = mongoose.connection;

// connection.on('error', function (err) {
//     console.log(err)
// });


// connection.once('open', function () {
//     console.log("MongoDB database connection established successfully");
// });

// const cors = require('cors');
// const app = express();

// app.use(cors);

// const PORT = 4000;
// app.post('/user/register', (res, req)=>{
//     console.log('123');
// });
// let users = require('./routes/auth');
// app.use('/user', users);
// app.post('/user/login', verifyToken, (req, res) => {
//     passport.authenticate('local', {session: false}, (err, user, info) => {
//         if (err || !user) {
//             return res.status(400).json({
//                 message: 'Something is not right',
//                 user   : user
//             });
//         }
//        req.login(user, {session: false}, (err) => {
//            if (err) {
//                res.send(err);
//            }
//            // generate a signed son web token with the contents of user object and return it in the response
//            const token = jwt.sign(user, 'your_jwt_secret');
//            return res.json({user, token});
//         });
//     })(req, res);
// });
// function verifyToken(req, res, next) {
//     //get auth header value
//     const bearerHeader = req.headers['authorization'];
//     if (typeof bearerHeader !== 'undefined') {
//         const bearer = bearerHeader.split(' ');
//         const bearerToken = bearer[1];
//         req.token = bearerToken;
        
//         next();
//     } else {
//         res.sendStatus(403);
//     }

//     next();
// }
// mongoose.connect(config.database, {useNewUrlParser: true});

// app.listen(PORT, function () {
//     console.log("Server is running on Port: " + PORT);
// });