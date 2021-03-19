const csv = require('csv-parser');
const fs = require('fs')
const products = [];
const styles = [];
const failed = [];
const results2 = [];

//for products all should be string

fs.createReadStream('./DataBase/product.csv').pipe(csv({})).on('data', (data)=>{

  var str = '';
  var boolean = true
  for(var key in data){
    var value = data[key]
    if(key === ' default_price'){
      var number = parseInt(value)
      if(isNaN(number)){
      var number = value.match(/[0-9]+/g);
      value = number
      }
    }
    if(boolean){
      if(key !== ' default_price' && key !== 'id' ){
        str += '"'+value+'"';
        boolean = false;
      }else{
        str += value;
    boolean = false;
      }

  }else {
    if(key !== ' default_price' && key !== 'id' ){
      str += ',"' + value +'"';
    }else {
      str += ',' + value;
    }
  }
  }

  fs.appendFile('test.csv',str + '\n',(err)=>{
    if(err){
      console.log(err)
    }else{

    }
    })
}).on('end',()=>{
  console.log('completed')
})

//   .on('end',()=>{
//     console.log(' products');
// console.log('--------------------------');
//     for(i =0; i < products.length; i++){
//       var number = parseInt(products[i][' default_price'])
//       if(isNaN(number)){
//         var bew = products[i][' default_price'].match(/[0-9]+/g)
//         products[i][' default_price'] = bew[0]
//       }
//     }

//   })


//   fs.createReadStream('./DataBase/styles.csv').pipe(csv({})).on('data', (data)=>{
//     styles.push(data)}).on('end',()=>{

//       console.log('styles ');
// console.log('--------------------------');

//       for(var i = 0; i < styles.length;i++){
//         var number = parseInt(styles[i].sale_price)
//         if(isNaN(number) && styles[i].sale_price!== 'null'){
//           failed.push(styles[i])
//         }
//       }
//      console.log(failed)

//     })





    // var obj={}
    // obj.table = [ {id: '11',
    //  name: 'Air Minis 250',
    //  slogan: 'Full court support',
    //  description: 'This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.',
    //  category: 'Basketball Shoes',
    //  default_price: '49'},{id: '12',
    //  name: 'Air Minis 250',
    //  slogan: 'Full court support',
    //  description: 'This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.',
    //  category: 'Basketball Shoes',
    //  default_price: '49'} ]
    //  var string = [];
    //  for(var i = 0; i < obj.table.length; i++){
    //    var str = '';
    //    var first = true;
    //    for(var key in obj.table[i]){
    //      if(first){
    //       str += obj.table[i][key] + '';
    //       first = false;
    //      }else {
    //     str +=  ', ' + obj.table[i][key]
    //      }
    //    }
    //    string.push(str);
    //  }
    //  let test = string.join('\n')
    // fs.writeFile('test.txt',test,(err)=>{
    // if(err){
    //   console.log(err)
    // }else{
    //   console.log('completed')
    // }
    // })




    // console.log('sku ');
    // console.log('--------------------------');
    //   fs.createReadStream('./DataBase/skus.csv').pipe(csv({})).on('data', (data)=>{
    //     console.log(data)})

    //     .on('end',()=>{
    //      console.log(results2)

    //     })
