const mongoose = require('mongoose')
const  {Schema } = mongoose

const schema = new Schema({
    title : {type : String , required: true},
    date : {type : String , required: true},
    image : {type : String , required : true},
})

const News = mongoose.model("news",schema)


module.exports = News