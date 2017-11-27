const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Item = require('./model/items');
const Account = require('./model/accounts');
const app = express();
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: './src/uploads' });

const port = 3001;

// connect mongoose

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
    item.title = req.body.itemData.title;
    item.description = req.body.itemData.description;
    item.price = req.body.itemData.price;
    item.createdBy = req.body.itemData.createdBy;

    

    item.save((err, item) => {
      if (err)
      res.send(err, item);
      res.send(item);
    });
  });

router.route('/items/:item_id')
  // delete item  
  .delete((req,res) => {
    const idToDelete = req.params.item_id;
    Item.remove({
      _id: req.params.item_id
    }, (err, item) => {
      if (err)
      res.send(err);
      // send back the id that was sent here so I can dispatch it to redux
      res.send(idToDelete);
    });    
  });

// Accounts routes
router.route('/account')
  .post((req, res) => {
    const username = req.body.username;
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
    })
  })
  .put((req, res) => {
    const id = req.body._id;   
    Account.findOne({_id: id}, (err, account) => {
      if (err) {
        res.status(500).send(err);
      } else {
        account.location = req.body.location;
        account.age = req.body.age;
        account.username = req.body.username;
        account.password = req.body.password;
        account.firstName = req.body.firstName;
        account.lastName = req.body.lastName;
        account.email = req.body.email;

        account.save((err, account) => {
          if (err) {
            res.status(500).send(err)
          }
          res.send(account);          
        });
      }
    })
  })

// create account route
router.route('/accountCreate')
  .post((req, res) => {
    const { firstName, lastName, age, location, email, username, password } = req.body;
    const account = new Account();
    account.firstName = firstName;
    account.lastName = lastName;
    account.age = age;
    account.location = location;
    account.email = email;
    account.username = username;
    account.password = password;

    account.save((err, account) => {
      if(err)
        res.send(err, account);
      res.json({
        username,
        password,
        firstName,
        lastName,
        email,
        age,
        location
      });
    });
  });

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