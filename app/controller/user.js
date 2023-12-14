let query = require('../queries/user.js');
let argon = require('argon2');

module.exports = {
   
    loginPage : function(req,res){
         res.render('login');
    },

    login : function(req,res){
       let {username,password} = req.body;
       try{
          let querydata= query.authenticateLogin(username);
          let pass;

          if(querydata != undefined){
             pass = querydata.password;
           
             let passwordVal = argon.verify(pass,password);
             if(passwordVal){

             }else{
                return res.json({auth : 'Invalid password'});
             }

          }

       }catch(err){
        return res.status(500).json({auth : 'Error'});
       }
        
    }
  

}