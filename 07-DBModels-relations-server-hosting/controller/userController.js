const User = require("../models/userModel");

const registerUser = async (req, res) => {
  try {
    const data = req.body;
    const { email } = data;
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(404).json({
        success: false,
        message: "User already exits",
      });
    }
    const newdata = new User(data);
    await newdata.save();

    return res.status(200).json({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const updatedData = await User.findByIdAndUpdate({ _id: id }, data, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ success: false, message: "No user found" });
    }

    return res
      .status(200)
      .json({ success: true, message: "user data updated", data: updatedData });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

const findUser = async(req, res)=>{

  try {
    
    const id = req.params.id
    const response = await User.findOne({_id : id}).select('-password')
    if (!response){
      return res.status(404).json({ success: false, message: "No user found" });
    }

    return res
    .status(200)
    .json({ success: true, message: "User Found", data: response })
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}



module.exports = { registerUser, updateUser,findUser };
