const express = require('express')
const router = express.Router()
const RestaurantController = require('../controllers/Restaurantcontroller')

router.post('/', (req,res)=>{
    res.json('HI')
})

// user register
router.get('/api/test',RestaurantController.test)
router.get('/api/getAllitems', RestaurantController.getAllitems)
router.get('/api/getAllorders', RestaurantController.getAllorders)
router.post('/api/addItem',RestaurantController.addItem)
router.post('/api/createOrder',RestaurantController.createOrder)


module.exports = router