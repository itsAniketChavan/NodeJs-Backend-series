const Menu = require('../models/menuModel')

const registerMenu = async (req, res)=>{

    try {
        
        const data = req.body
        const menudata = new Menu(data)
        await menudata.save()
        return res.status(200).json({success:true, message: 'Successfully registered menu', data:menudata})

    } catch (error) {
        
        console.log(error)
        return res.status(500).json({success:false, message:"Internal Server error"})

    }
}

const updateMenu = async (req, res)=>{

    try {
        
        const id = req.params.id
        const data = req.body
        const response = await Menu.findByIdAndUpdate({_id:id},data, {new:true})
        if(!response){

            return res.status(404).json({success:false, message: 'menu not found'})
        }
        return res.status(200).json({success:true, message: 'Successfully Updated menu', data:response})

    } catch (error) {
        
        console.log(error)
        return res.status(500).json({success:false, message:"Internal Server error"})

    }
}

const deleteMenu = async (req, res)=>{

    try {
        
        const id = req.params.id
        const response = await Menu.findByIdAndDelete({_id:id})
        if(!response){

            return res.status(404).json({success:false, message: 'menu not found'})
        }
        return res.status(200).json({success:true, message: 'Successfully deleted menu'})

    } catch (error) {
        
        console.log(error)
        return res.status(500).json({success:false, message:"Internal Server error"})

    }
}

const findMenu = async (req, res)=>{

    try {
        
        const id = req.params.id
        const response = await Menu.findById({_id:id})
        if(!response){

            return res.status(404).json({success:false, message: 'menu not found'})
        }
        return res.status(200).json({success:true, message: 'Menu Found', data:response})

    } catch (error) {
        
        console.log(error)
        return res.status(500).json({success:false, message:"Internal Server error"})

    }
}
module.exports = {registerMenu, updateMenu,deleteMenu,findMenu}