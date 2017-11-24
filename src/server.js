const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Item = require('./model/items');
const Account = require('./model/accounts');

const app = express();
const router = express.Router();

const port = 3001;



// connect mongoose

// mongoose.connect('mongodb://localhost:27017/barterDB');

const promise = mongoose.connect('mongodb://localhost:27017/barterDB', {
  useMongoClient: true
});


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
router.route('/accounts')
  .get((req, res) => {
    Account.find((err, accounts) => {
      if(err)
      res.send(err);
      res.json(accounts)
    })
  })
  .post((req, res) => {
    const account = new Account();
    account.firstName = req.body.firstName;
    account.lastName = req.body.lastName;
    account.age = req.body.age;
    account.location = req.body.location;
    account.email = req.body.email;
    account.userName = req.body.userName;
    account.passWord = req.body.passWord;

    account.save((err, account) => {
      if (err)
      res.send(err, account);
      res.json({ id: account._id });
      
    })
  });

// use our router config when we call /api
app.use('/api', router);

// start server and listen for requests
app.listen(port, () => {
  console.log('api running on port ', port);
});