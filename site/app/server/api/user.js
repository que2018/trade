import Express from 'express'

import {responseClient} from '../util'

import Balance from '../../mongoDB/models'

const router = Express.Router();


// get all balance
router.get('/getAllBalance', (req, res) => {
    Balance.find({},{_id:0 }).then( data => {
      responseClient(res, 200, 0, 'get request successfully', data);
    } , (e) => {
      responseClient(res);
    });
});


// get one balance
router.get('/getBalance/:id', (req, res) => {
    var id = req.params.id;  
    Currency.findById(id).then((currency) => {
      if (!currency) {
        return res.status(404).send();
      }
      res.send({currency});
    }).catch((e) => {
      res.status(400).send(e);
    });
  });
  

//add 
// app.post('/addCurrency', (req, res) => {
//     var currency = new Currency({
//         name: req.body.name
//         //  name: 'xrp'
//     });
//     currency.save().then((doc) => {
//       res.send(doc);
//     }, (e) => {
//       res.status(400).send(e);
//     });
//   });





  

// //remove one currency
// app.delete('/deleteCurrency/:id', (req, res) => {
//   var id = req.params.id;
//   Currency.findByIdAndRemove(id).then((currency) => {
//     if (!currency) {
//       return res.status(404).send();
//     }

//     res.send({currency});
//   }).catch((e) => {
//     res.status(400).send();
//   });
// });


// //update one currency
// app.patch('/updateCurrency/:id', (req, res) => {
//   var id = req.params.id;


//   Currency.findByIdAndUpdate(id, req.body, {new: true}).then((currency) => {
//     if (!currency) {
//       return res.status(404).send();
//     }

//     res.send({currency});
//   }).catch((e) => {
//     res.status(400).send();
//   })
// });

// //get all currency 
// app.get('/getAllCurrency', (req, res) => {
//     Currency.find().then((crurrency) => {
//       res.send({crurrency});
//     }, (e) => {
//       res.status(400).send(e);
//     });
//   });
  


// app.listen(port, () => {
//   console.log(`Started up at port ${port}`);
// });

// module.exports = {app};

module.exports = router;