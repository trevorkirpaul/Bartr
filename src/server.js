const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Item = require('./model/items');
const Account = require('./model/accounts');
const multer = require('multer');
const app = express();

const port = 3001;

// connect to mongoose
const promise = mongoose.connect('mongodb://localhost:27017/barterDB', {
  useMongoClient: true
});

// set up multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {    
    cb(null, './uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
const storageAvatar = multer.diskStorage({
  destination: (req, file, cb) => {    
    cb(null, './uploads/avatar')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({storage : storage});
const uploadAvatar = multer({storage : storageAvatar});

// middleware

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

// **ROUTES**

// Items routes

app.get('/api/items', (req, res) => {
  Item.find((err, items) => {
    if (err)
    res.send(err);
    // res with JSON obj of items
    res.json(items)
  });
});

app.post('/api/item/:item_id', (req, res) => {
  const itemID = req.params.item_id;
  
  Item.findOne({_id: itemID}, (err, item) => {
    if (err)
    res.send(err);

    res.send(item);
  })
})

app.post('/api/items', (req, res) => {
  const item = new Item();
  // body parser lets us use the req.body
  item.title = req.body.title;
  item.description = req.body.description;
  item.price = req.body.price;
  item.createdBy = req.body.createdBy;
  item.tags = req.body.tags;
  item.imagePath = req.body.imagePath;   
  // save to db
  item.save((err, item) => {
    if (err)
    res.send(err, item);
    res.send(item);
  });
});

// image
app.post('/api/items/img', upload.single('image'), (req, res) => {
  // send back info, TODO: add error handeling
  if (req.file) {
    res.send({
      path: req.file.originalname  
    })
  } else {
    res.send({path: 'empty.jpeg'});
  }

});
// delete item
app.delete('/api/items/:item_id', (req, res) => {
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

// ACCOUNT ROUTES
// 
app.post('/api/account', (req, res) => {
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
  });
});
// update profile
app.put('/api/account', (req, res) => {
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
      account.avatarPath = req.body.avatarPath;

      account.save((err, account) => {
        if (err) {
          res.status(500).send(err)
        }
        res.send(account);          
      });
    }
  });
});
// create account
app.post('/api/accountCreate', (req, res) => {
  const { firstName, lastName, age, location, email, username, password, avatarPath } = req.body;
  const account = new Account();
  account.firstName = firstName;
  account.lastName = lastName;
  account.age = age;
  account.location = location;
  account.email = email;
  account.username = username;
  account.password = password;
  account.avatarPath = avatarPath;

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
      location,
      avatarPath
    });
  });
});
// profile avatar

app.post('/api/accountCreate/avatar', uploadAvatar.single('avatar'), (req, res) => {
  if(req.file) {
    res.send({
      avatarPath: req.file.originalname
    })
  } else {
    res.send({
      avatarPath: 'defaultAvatar.png'
    })
  }
});


// ROUTE LOGIN
app.post('/api/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  Account.findOne({ username: username }, (err, obj) => {
    if (!obj) {
      res.send('no user found');
    } else if (obj) {
      obj.password === password ? res.send(obj) : res.send("incorrect password");
    }
  })
})


// final config

// app.use('/api', router);
app.use(express.static('uploads'));

app.listen(port, () => {
  console.log(`App running on ${port}`);
});














