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

module.exports = controller