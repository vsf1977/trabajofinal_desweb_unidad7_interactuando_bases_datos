var MongoClient =  require("mongodb").MongoClient

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
                client.close(true)
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
            collection.deleteOne({"id":  req.body.id} ,(err,results) => 
            {      
                if (err) throw err               
                res.send("Item Borrado")
                client.close(true)
            })
            
        }
    })
}

controller.new = (req , res) =>
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
            collection.insertOne({"id":  req.body.id,"title":req.body.title,"start":req.body.start,"end":req.body.end}, (err, response) =>
            {      
                if (err) throw err               
                res.send("Item Agregado")
                client.close(true)
            })
            
        }
    })
}

controller.update = (req , res) =>
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
            collection.updateOne({"id":  req.body.id},{$set:{"start":req.body.start,"end":req.body.end}}, (err, response) =>
            {      
                if (err) throw err               
                res.send("Item Actualizado")  
                client.close(true)                  
            })
            
        }
    })
}

module.exports = controller