const item = require("../models/itemmodels");

// get all items 
const getAllItems = async (req, res) => {
    try{
        res.json(await item.find());
    }
    catch (error){
        console.log({ message: error });
    }
}

// get spes item
const getItem = async (req, res) => {
    try{
        res.json(await item.find());
    }
    catch (error){
        console.log({ message: error });
    }
}

// post item
const postItem = async (req, res) => {
    try{
        const createItem = new item({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
          });
          res.json(await createItem.save());
    }
    catch (error){
        console.log({ message: error });
    }
}

// Delete item
const deleteItem = async (req, res) => {
    try{
        res.json(await item.deleteOne({ _id: req.params.itemId }));
     }
    catch (error){
        console.log({ message: error });
    }
}

// Upddate item 
const uppdateItem = async (req, res) => {
    try{
        res.json(
            await item.updateOne(
              { _id: req.params.itemId },
              {
                $set: {
                  title: req.body.title,
                  description: req.body.description,
                  price: req.body.price,
                  stock: req.body.stock,
                  category: req.body.category,
                  image: req.body.image,
                },
              }
            )
          );
    }
    catch (error){
        console.log({ message: error });
    }
}


module.exports = {
    getAllItems,
    postItem,
    getItem,
    deleteItem,
    uppdateItem,
  };