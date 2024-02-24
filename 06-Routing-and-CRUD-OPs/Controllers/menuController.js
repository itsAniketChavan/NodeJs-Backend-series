
const { default: mongoose } = require('mongoose')
const Menu = require('../models/menus')


const addMenu = async(req, res) => {

    try {
        
        const data = req.body
        const menu = new Menu(data)
        await menu.save()

        return res.status(200).json({success:true, message:"Menu saved", data:menu})
    } catch (error) {

        console.log(error)
        return res.status(500).json('Internal server error')
        
    }
}

const findMenu = async (req,res)=>{

    try {

        const name =  req.params.name;
        const data = await Menu.find({name:name})

        if (data.length == 0){
            return res.status(404).json({success:false, message:"Item not found "})
        }

        return res.status(200).json(data);
        
    } catch (error) {
        console.log(error)
        return res.status(500).json("Internal server error")
    }
}

const menuDelete = async (req, res)=>{

    try {
        const id = req.params.id
        if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(500).json( {success:false, message:"ID not in Format"})
       
        }
        const response = await Menu.findOneAndDelete({_id:id})

        if (!response){
            return res.status(500).json( {success:false, message:"Menu not found"})
        }
        return res.status(200).json({success:true, message:"Record deleted successfully"})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json("Internal server error")
    }
}

module.exports = {addMenu, findMenu, menuDelete}