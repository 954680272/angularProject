const MongoClient  = require("mongodb").MongoClient;


const DB_CONN_STR =  "mongodb://47.94.227.171:27017/admin"

module.exports = {
    conn:function(callback){
        MongoClient.connect(DB_CONN_STR,(err,db)=>{
            if(err){
                console.log("数据库连接失败");
                callback(err,null);
            }else{
                console.log("数据库连接成功")
                callback(null,db);
            }
        })
    }
}