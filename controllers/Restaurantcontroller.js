const Item = require('../models/items')
const Order = require('../models/order')
const RestaurantController ={}

RestaurantController.test =(req,res)=>{
    return res.json( {
        status : 200,
        message : "Test successfull"
    })
}

RestaurantController.addItem =async (req,res)=>{
    const body = req.body
    const item = new Item(body)
     let dish = await item.save()
        .then((item)=>{
            res.json({
                message : 'successfull',
                data : item 
            })
        })
        .catch((err)=>{
            res.json(err)
        })
}

RestaurantController.getAllitems = async (req,res)=>{
    try{
        let allItems= await Item.find({})
        res.send({msg: "Successfull ",data: allItems})
    }catch(e){
        res.send({msg: "Unsuccessful", err: e});

    }
   
    
}

RestaurantController.createOrder =async (req,res)=>{
    try {
        const { items, tableNumber } = req.body;
        
        // Calculate total price
        const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
    
        const newOrder = new Order({ items, tableNumber, totalPrice });
        await newOrder.save();
    
        res.status(201).json({ message: "Order placed successfully!", newOrder });
      } catch (error) {
        res.status(500).json({ message: "Error placing order", error });
      }
}


RestaurantController.getAllorders = async (req,res)=>{
    try{
        let allOrders= await Order.find({ status: "open" })
        res.send({msg: "Successfull ",data: allOrders})
    }catch(e){
        res.send({msg: "Unsuccessful", err: e.message});

    }
   
    
}


module.exports = RestaurantController


