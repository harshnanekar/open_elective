const  { postgres } = require('../config/database.js');

const a = class data{
 
    static async authenticateLogin(username){
        console.log('Query executed ' + username);
        let datas = await postgres.query('SELECT * FROM user_info WHERE username = $1', [username]);
    
        if(datas.rowCount > 0){
            return datas.rows;
        }
        
    }
    
}

module.exports = a;