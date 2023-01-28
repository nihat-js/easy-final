const express = require('express')
const router = express.Router()


const newsController= require('../controllers/newsController')

router.get("/",newsController.get)
router.get("/:id",newsController.getById)
router.post("/",newsController.add)
router.delete('/:id',newsController.deleteById)




module.exports = router