const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Item = require('./model/items');
const Account = require('./model/accounts');
const app = express();
const router = express.Router();

const port = 3001;

// connect mongoose

const promise = mongoose.connect('mongodb://localhost:27017/barterDB', {
  useMongoClient: true
});

// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// // configure Passport strat
// passport.use(new LocalStrategy(
//   (username, password, done) => {
//     console.log(username, password);
//     Account.findOne({ username: username }, (err, user) => {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (user.password !== password) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     }); 
//   }
// ));
// app.use(passport.initialize());
// app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req,res, next) => {  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

// set up routes

router.get('/', (req, res) => {
  res.json({ message: 'APIT Initialized!'});
});

// Items routes

router.route('/items')
  .get((req, res) => {
    // look at Item schema
    Item.find((err, items) => {
      if (err)
      res.send(err);
      // res with JSON obj of items
      res.json(items)
    });
  })
  // post new item
  .post((req, res) => {
    const item = new Item();
    // body parser lets us use the req.body
    item.title = req.body.title;
    item.description = req.body.description;
    item.price = req.body.price;

    item.save((err, item) => {
      if (err)
      res.send(err, item);
      res.json({ id: item.id });      
    });
  });

router.route('/items/:item_id')
  // delete item  
  .delete((req,res) => {
    Item.remove({
      _id: req.params.item_id
    }, (err, item) => {
      if (err)
      res.send(err);
    });    
  });

// Accounts routes
router.route('/account')
  .post((req, res) => {
    const username = req.body.username;
    console.log(username);
    Account.findOne({ username: username }, (err,obj) => {
      res.send(
        {
          "firstName": obj.firstName,
          "lastName": obj.lastName,
          "age": obj.age,
          "location": obj.location,
          "email": obj.email,
          "username": obj.username
        });
      // res.send(obj);
    })
  })

// routes to login

router.route('/login')
  .post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    Account.findOne({ username: username }, (err, obj) => {
      if (!obj) {
        res.send('no user found');
      } else if (obj) {
        obj.password === password ? res.send(obj) : res.send("incorrect password");
      }
    })
    
  });


// use our router config when we call /api
app.use('/api', router);

// start server and listen for requests
app.listen(port, () => {
  console.log('api running on port ', port);
});