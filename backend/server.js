const express = require('express')
const mongoose=require('mongoose')
const bodyparser= require('body-parser')
const server= express()

server.use(bodyparser.urlencoded({extended:false}));
 async function dbconnect(){
    mongoose
    .connect("mongodb://127.0.0.1:27017/moviesnotif", {
      useNewUrlParser: true,
    
    })
    .then(
      () => {
        /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
        console.log("connecter");
      },
      (err) => {
        /** handle initial connection error */
        console.log(err);
        console.log("connexion échoué");
      }
    );
   

}
dbconnect();
   

  

server.get('/',(req,res)=>{
  return  res.send()
})
// liste des films
server.get('/films',(req,res)=>{
    // recupération des films de la base de donnés 
    let films=[],
    
    // return res.send(films)
  });

  
// post route
server.post('/voted',(req,res)=>{
    //onsole.log(">> req",req.body);

    return res.send(req.body);
    const id_film = req.body.id_film;
    console.log(req.body.id_film);
    return res.send({
        "id_film":id_film,
        "voted":true
    })
})

server.listen(3000,()=>{
    //
    console.log("server running on http//:localhost:3000");

});