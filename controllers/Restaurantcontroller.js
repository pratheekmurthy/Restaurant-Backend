const Item = require('../models/items');
const Order = require('../models/order');
const RestaurantController = {};

RestaurantController.test = (req, res) => {
    return res.json({
        status: 200,
        message: "Test successful"
    });
};

RestaurantController.addItem = async (req, res) => {
    try {
        const item = new Item(req.body);
        const savedItem = await item.save();
        res.json({ message: "Item added successfully", data: savedItem });
    } catch (err) {
        res.status(500).json({ message: "Error adding item", error: err });
    }
};

RestaurantController.getAllitems = async (req, res) => {
    try {
        let allItems = await Item.find({});
        res.json({ msg: "Successful", data: allItems });
    } catch (err) {
        res.status(500).json({ msg: "Unsuccessful", error: err });
    }
};

RestaurantController.createOrder = async (req, res) => {
    try {
        const { items, tableNumber } = req.body;
        const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
        const newOrder = new Order({ items, tableNumber, totalPrice, status: "open" });
        await newOrder.save();
        res.status(201).json({ message: "Order placed successfully!", newOrder });
    } catch (error) {
        res.status(500).json({ message: "Error placing order", error });
    }
};

RestaurantController.getAllorders = async (req, res) => {
    try {
        let allOrders = await Order.find({ status: "open" });
        res.json({ msg: "Successful", data: allOrders });
    } catch (err) {
        res.status(500).json({ msg: "Unsuccessful", error: err.message });
    }
};

// Update order status to "closed"
RestaurantController.updateStatus = async (req, res) => {
    try {
        const { _id } = req.body; // Correct way to get _id from request body
        console.log("Updating order ID:", _id);

        if (!_id) {
            return res.status(400).json({ message: "Order ID is required" });
        }

        const updatedOrder = await Order.findByIdAndUpdate(_id, { status: "closed" }, { new: true });

        if (!updatedOrder) {
            return res.status(404).json({ message: "Order not found" });
        }

        res.json({ message: "Order status updated successfully", data: updatedOrder });
    } catch (err) {
        res.status(500).json({ message: "Error updating order status", error: err });
    }
};


// Delete an item from the database
RestaurantController.deleteItem = async (req, res) => {
    try {
        const { id } = req.params; // Get ID from URL parameter
        const deletedItem = await Item.findByIdAndDelete(id);

        if (!deletedItem) {
            return res.status(404).json({ message: "Item not found" });
        }

        res.json({ message: "Item deleted successfully", data: deletedItem });
    } catch (err) {
        res.status(500).json({ message: "Error deleting item", error: err });
    }
};

module.exports = RestaurantController;