import Express from 'express'
import bodyParser from 'body-parser'
import {Currency} from '../../mangoDB/model'

const port = process.env.PORT || 3000;
// const router = Express.Router();

var app = Express();
app.use(bodyParser.json());


//add 
app.post('/addCurrency', (req, res) => {
    var currency = new Currency({
        name: req.body.name
        //  name: 'xrp'
    });
    currency.save().then((doc) => {
      res.send(doc);
    }, (e) => {
      res.status(400).send(e);
    });
  });
  

//remove one currency
app.delete('/deleteCurrency/:id', (req, res) => {
  var id = req.params.id;
  Currency.findByIdAndRemove(id).then((currency) => {
    if (!currency) {
      return res.status(404).send();
    }

    res.send({currency});
  }).catch((e) => {
    res.status(400).send();
  });
});


//update one currency
app.patch('/updateCurrency/:id', (req, res) => {
  var id = req.params.id;


  Currency.findByIdAndUpdate(id, req.body, {new: true}).then((currency) => {
    if (!currency) {
      return res.status(404).send();
    }

    res.send({currency});
  }).catch((e) => {
    res.status(400).send();
  })
});

//get all currency 
app.get('/getAllCurrency', (req, res) => {
    Currency.find().then((crurrency) => {
      res.send({crurrency});
    }, (e) => {
      res.status(400).send(e);
    });
  });
  
//get one currency
app.get('/getCurrency/:id', (req, res) => {
    var id = req.params.id;  
    Currency.findById(id).then((currency) => {
      if (!currency) {
        return res.status(404).send();
      }
      res.send({currency});
    }).catch((e) => {
      res.status(400).send();
    });
  });
  

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
