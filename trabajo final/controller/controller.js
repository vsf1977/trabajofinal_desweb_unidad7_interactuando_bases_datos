var MongoClient =  require("mongodb").MongoClient
var ObjectId = require('mongodb').ObjectID

const controller = {}

controller.login = (req , res) =>
{
    MongoClient.connect('mongodb://'+req.body.user+':'+req.body.pass+'@localhost:27017/agenda', function(err) 
    {
        if (err) 
        {
            res.send(err)
        }
        else
        {
            res.send("Validado")
        }
    })
}

controller.all = (req , res) =>
{
    MongoClient.connect('mongodb://localhost:27017/agenda', function(err,client) 
    {
        if (err) 
        {
            res.send(err)
        }
        else
        {
            const db = client.db('agenda')
            const collection = db.collection('citas')
            collection.find().toArray((err, items) => 
            {
                res.send(items)
            })            
        }
    })
}

controller.delete = (req , res) =>
{
    MongoClient.connect('mongodb://localhost:27017/agenda', function(err,client) 
    {
        if (err) 
        {
            res.send(err)
        }
        else
        {
            const db = client.db('agenda')
            const collection = db.collection('citas') 
            collection.deleteOne({"_id":  ObjectId(req.body.id)} ,(err,results) => 
            {      
                if (err) throw err               
                res.send("Item Borrado")
                client.close(true)
            })
            
        }
    })
}


module.exports = controller