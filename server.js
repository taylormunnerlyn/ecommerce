var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongo = require('mongojs');

var app = express();
var port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

var db = mongo('ecommerce', ['products']);



app.post('/api/products', function(req, res){
    db.products.save(req.body, function(error, response){
        if(error) {
            return res.status(500).json(error);
        } else {
            return res.json(response);
        }
    });
});

app.get('/api/products', function(req, res, next){
  db.products.find(req.query, function(err, obj){
    if(err){
      return res.status(500).json(error);
    } else {
      return res.status(200).json(obj);
    }
  })
})

app.get('/api/products/:id', function(req, res, next){
  var newObj = {_id: mongo.ObjectId(req.params.id)}
  db.products.find(newObj, function(err, obj){
    if(err){
      return res.status(500).json(error);
    } else {
      return res.status(200).json(obj);
    }
  })
})

app.put('/api/products/:id', function(req, res, next){
  var newObj = {_id: mongo.ObjectId(req.params.id)}
  db.products.update(newObj, req.body, function(err, obj){
    if(err){
      return res.status(500).json(error);
    } else {
      return res.status(200).json(obj);
    }
  })
})

app.delete('/api/products/:id', function(req, res, next){
  var newObj = {_id: mongo.ObjectId(req.params.id)}
  db.products.remove(newObj, function(err, obj){
    if(err){
      return res.status(500).json(error);
    } else {
      return res.status(200).json(obj);
    }
  })
})


app.listen(port, function(){
  console.log('listening on port 3000')
});
