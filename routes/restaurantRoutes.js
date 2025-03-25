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
router.put('/api/updateOrder', RestaurantController.updateStatus); // Ensure this exists
router.delete('/api/DeleteItem/:id', RestaurantController.deleteItem); // Correct delete route



module.exports = router