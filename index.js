const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const config = require('config')
// const request = require("request");
const path = require("path");

var morgan = require('morgan')
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var flash    = require('connect-flash');
var methodOverride = require('method-override')
const helmet = require('helmet')

// require('./config/passport')(passport); // pass passport for configuration

const app = express();
app.use(
  cors({
    // origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
    credentials: true
  })
);


app.use(express.json());

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); //
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true,
    limit : "50mb"
  }));
  /** VIEWS CONFIGURATION */
  /** SERVING PUBLIC FILES */
  app.use(express.static(path.join(__dirname, "public")));
  /** SERVING PUBLIC FILES */
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "ejs");
  /** VIEWS CONFIGURATION */
  
  /*** PASPORT */

  app.use(flash()); // use connect-flash for flash messages stored in session
 
  /** END PASPORT */
// Use Routes

app.use('/', require('./routes/home'))
// app.use('/', require('./routes/user'))


/*** AUTH ROUTE */

app.use(methodOverride('_method'))



// routes ======================================================================
// require('./routes/auth.js'); // load our routes and pass in our app and fully configured passport
// require('./routes/referral.js')(app); // load our routes and pass in our app and fully configured passport
app.use(helmet())


/** END AUTH ROUTE */
// app.use('/api/signup', require('./routes/api/signUp'))
// app.use('/api/auth', require('./routes/api/auth'))
// app.use('/api/admin', require('./routes/api/admin'))


// app.use('/api/pay', require('./routes/api/coinpayment'))
// app.use('/api/discord', require('./routes/api/discord'));
// app.use('/api/paystack', require('./routes/api/paystack'))
// app.use('/profile/referal', require('./routes/referral'))
// app.use('/api/pacPay', require('./routes/api/pacPay'))












app.locals.title="Car Sale"
app.locals.notifications = []
// app.localsauthenticated = !req.user.anonymous


app.set("port", process.env.PORT || 3333);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

