const csv = require('csv-parser');
const fs = require('fs');
const readline = require('readline');
const products = [];
const styles = [];
const failed = [];
const ids = [];
var past = 0;
const urlPattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

function isValidURL(url) {
  let str = url;
  // remove surrounding double quotes
  if (url[0] === '"' && url[0] === url[url.length - 1]) {
    str = url.substring(1, url.length - 1);
  }

  return !!urlPattern.test(str);
}

// fs.createReadStream('./DataBase/features.csv').pipe(csv({})).on('data', (data)=>{
//   for(var key in data){

//   }
// })


const readPhotos = readline.createInterface({
  input: fs.createReadStream('./DataBase/photos.csv'),
  output: fs.createWriteStream('./DataBase/cleanPhotos.csv')
});

// const readStyles = readline.createInterface({
//   input: fs.createReadStream('./DataBase/styles.csv'),
//   output: fs.createWriteStream('./DataBase/cleanStyles.csv')
// })

// const readSkus = readline.createInterface({
//   input: fs.createReadStream('./DataBase/skus.csv'),
//   output: fs.createWriteStream('./DataBase/cleanSkus.csv')
// })




// works
// readSkus.on('line', (line)=>{
//   var pass = true
//   var arr = line.split(',')
//   if (isNaN(parseInt(arr[0]))){
//     pass = false
//   }
//   if (isNaN(parseInt(arr[1]))){
//     pass = false
//   }
//   if (isNaN(parseInt(arr[3]))){
//     pass = false
//   }
//   if(arr.length > 4){
//     pass = false
//   }
//   if(pass === true ){
//     readSkus.output.write(line + '\n' )
//   }
// }).on('end',()=>{
//   console.log('completed Skus')
// })

// / works
// readStyles.on('line', (line)=>{
//   arr = line.split(',')
//   pass = true;
//   if(isNaN(parseInt(arr[0]))  ){
//     pass = false
//   }
//   if(isNaN(parseInt(arr[1])) ){
//     pass = false
//   }
//   if(isNaN(parseInt(arr[4])) ){
//     pass = false
//   }
//   if(arr[5] !== '0' ){
//     if(arr[5] !== '1'){
//     pass = false
//     }
//   }
//   if(arr[4] !== 'null' && isNaN(parseInt(arr[5])) ){
//     pass = false
//   }
//   if(arr.length > 6 ){
//     pass = false
//   }
//   if(pass === true){
//     readStyles.output.write(line + '\n')
//   }
// }).on('end',()=>{
//   console.log('completed Styles')
// })


// this works
readPhotos.on('line', (line) => {
    var arr = line.split(",")
    var pass = true;

    // check the data has a string at the end
   if(arr[3][0] !== '"' ){
      arr[3] =  '"'+arr[3]
   }
   if( arr[3][arr[3].length-1] !== '"'){
    arr[3] =  arr[3] + '"'

  }
  if(arr[2][0] !== '"' ){
    arr[2] =  '"'+arr[2]

 }
 if( arr[2][arr[2].length-1] !== '"'){
  arr[2] =  arr[2] + '"'

}
  if(isNaN(parseInt(arr[1]))){
    pass = false;
  }
  if(isNaN(parseInt(arr[0]))){
    pass = false;
  }

    if(isValidURL(arr[2]) === false){
      part1= arr[2].substring(0,1);
      part2 =  arr[2].substring(2,arr[2].length);
      arr[2]= part1 + part2
  }
  if(isValidURL(arr[3]) === false){

    part1= arr[3].substring(0,1);
    part2 =  arr[3].substring(2,arr[3].length);
    arr[3]=  part1 + part2

  }
  line = arr.join(',')
if(pass === true){
  readPhotos.output.write(line + '\n') // add a new line
}

}).on('end',()=>{
  console.log('completed photos')
});




  /// this works
// fs.createReadStream('./DataBase/product.csv').pipe(csv({})).on('data', (data)=>{
//   var str = '';
//   var boolean = true
//   for(var key in data){
//     var value = data[key]
//     if(key === ' default_price'){
//       var number = parseInt(value)
//       if(isNaN(number)){
//       var number = value.match(/[0-9]+/g);
//       value = number
//       }
//     }
//     if(boolean){
//       if(key !== ' default_price' && key !== 'id' ){
//         str += '"'+value+'"';
//         boolean = false;
//       }else{
//         str += value;
//     boolean = false;
//       }
//   }else {
//     if(key !== ' default_price' && key !== 'id' ){
//       str += ',"' + value +'"';
//     }else {
//       str += ',' + value;
//     }
//   }
//   }
//   fs.appendFile('./DataBase/cleanProducts.csv',str + '\n',(err)=>{
//     if(err){
//       console.log(err)
//     }else{
//     }
//     })
// }).on('end',()=>{
//   console.log('completed products')
// })



