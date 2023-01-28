const News  = require ( '../models/newsModel' )
async function get(req,res){
    let result = await News.find({})
    if (!result) return res.status(404).json({message : "Could not find any data"})

    res.json(result)
}


async function getById(req,res){
    if (!req.params.id) return res.status(404).json({message : "Not valid id"})

    let result = await News.findById(req.params.id)

    if (!result) return res.status(404).json({message : "Not found news with this id"})

    res.json(result)
}


async function add(req,res){
    if (!req.body.title || !req.body.image || !req.body.date) return res.status(404).json({message : "Not valid data"})

    let NewNews  = new  News({
        title : req.body.title,
        date : req.body.date ,
        image : req.body.image
    })
    
    let result = NewNews.save()

    if (!result) return res.status(404).json({message : "Could not save it"})

    res.json(result)

}

async function deleteById(req,res){
    if (!req.params.id) return res.status(404).json("Not valid id")

    let result = await  News.findByIdAndDelete(req.params.id)

    if (!result) return res.status(404).json({message : "Not found data with this id"})

    res.status(200).json(result)

}


module.exports = {
    get,
    getById,
    add,
    deleteById
}