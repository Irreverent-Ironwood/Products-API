const DB =  require('../ConnectDB/Connection.js')

module.exports = {

  Products: (req,res)=>{

  var  numberOfdata = req.query.count || 5;
  var startingPoint = 0;
  if(req.query.page !== undefined  ){

    startingPoint = (numberOfdata * req.query.page) - numberOfdata ;

  }

    DB.connection.query(`select * from Product limit ${startingPoint},${numberOfdata};`, (err, data) => {
      if(err){
        res.sendStatus(404);
      }else {
        res.send(data)
      }
    })

  },
  Product:(req,res)=>{

    DB.connection.query(`select * from Product where product_id = ${req.params.product_id}`, (err,A)=>{
      if(err){
        res.sendStatus(404);
      }else {
        DB.connection.query(`select feature, value from Features where product_id = ${req.params.product_id}`, (err,data)=>{
          if(err){
            res.sendStatus(404);
          }else {

          A[0].result = data

          res.send(A[0])
          }
        })
      }
    })
  },
  Related:(req,res)=>{
    DB.connection.query(`select related_id from related_product where product_id = ${req.params.product_id}`,(err,data)=>{
      if(err){
        res.sendStatus(404);
      } else {
        var array = []
        for(var i = 0; i < data.length; i++){
          array.push(data[i].related_id)
        }
        res.send(array)
      }
    })

  }, Styles: (req,res)=>{
    DB.connection.query(`select * from Photo where style_id in (select style_id from Styles where product_id = ${req.params.product_id});`,(err,urls)=>{
      if(err){
        res.sendStatus(404);
      }else{
        DB.connection.query(`select * from Skus where style_id in (select style_id from Styles where product_id = ${req.params.product_id});`, (err, skus)=>{
          if(err){
            res.sendStatus(404);
          }else{
            //skus
            DB.connection.query(`select * from Styles where product_id = ${req.params.product_id}`, (err,data)=>{
              if(err){
                res.sendStatus(404);
              }else {
              var obj={product_id: req.params.product_id.toString(), result:[] };
              for(var i =0; i < data.length; i++){
                var buffer = JSON.stringify(data[i].default_style)
                if(buffer === '{"type":"Buffer","data":[49]}'){
                data[i].default_style = true;
                }else {
                  data[i].default_style = false;
                }
                data[i].photos = [];
                data[i].skus ={}
                for(var j = 0; j < urls.length;j++){
                  if(data[i].style_id === urls[j].style_id){
                    var url = {
                      url:urls[j].url,
                      thumbnail_url:urls[j].thumbnail_url
                    }
                    data[i].photos.push(url);
                  }
                }
                for(var j = 0; j < urls.length;j++){
                  if(data[i].style_id === skus[j].style_id){
                    data[i].skus[skus[j].sku_id] = {quantity:skus[j].quantity ,size: skus[j].size}
                  }
                }

              }
              res.send(data)
            }
            })






          }
        })


      }
    })





  }

}

