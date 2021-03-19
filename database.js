const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Product_DB',{ useNewUrlParser: true } );

mongoose.connection.once('open',function(){
  console.log('Connection Has Been Made')
}).on('error', function(error){
  console.log('this is the error:',error)
});

let photo = mongoose.Schema({
  thumbnail_url: String,
  url: String
})
let sku= mongoose.Schema({
  sku: String,
  qiantity: Number,
  size:String
})

let styles = mongoose.Schema({
  style_id: Number,
  name: String,
  original_price: String,
  sale_price: String,
  defualt: Boolean,
  photos:[photo],
  skus:[sku]
});

let features = mongoose.Schema({
  feature: String,
  Value: String
})

let product = mongoose.Schema({
  id: {type: Number, unique: true, dropDubs: true},
  name: String,
  slogan: String,
  description: String,
  category: String,
  defualt_price: String,
  features:[features],
  related: [Number],
  styles: [styles]

})

const Jacket = mongoose.model('jacket', product);

const camo = new Jacket({
  product_id: 14034,
  name: "Camo Onesie",
  slogan: "Blend in to your crowd",
  description: "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  category: "Jackets",
  default_price: 140.00,
  related_products: [14035, 14036, 14041, 14040],
  features: [{ feature: "Sole", value: "Rubber" }],
  result : [{
    style_id: 70540,
    name: "Forest Green & Black",
    original_price: 140.00,
    sale_price: null,
    "default?": true,
    "photos": [
      {
          thumbnail_url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
      }
    ],
    skus: {
      sku_id: 37,
      quantity: 8,
      size: "XS"
    }
  }]
});

camo.save((err)=> {
  if(err){
    console.log(err);
  }
})