const Review = require('../models/reviewsModel')


const reviewSubmit = async (req, res)=>{

    try {
        
        const id = req.params.id
        const data = req.body

        const response = new Review(data)
        response.user = id
        await response.save()
        await response.populate({path:'user', select:"-password"})
        return res.status(200).json({success:true, message:"Review Submitted", data:response})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false, message:"Internal server error"})
    }
}

module.exports = {reviewSubmit}