const Person = require("../models/person");
const mongoose = require("mongoose");

const registerUser = async (req, res) => {
  try {
    const data = req.body;
    const person = new Person(data);
    await person.save();
    res.status(200).json(person);
  } catch (error) {
    res.status(404).json(error);
  }
};

const finduser = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid ID format" });
    }
    const data = await Person.findOne({ _id: id });
    if (!data) {
      return res.status(404).json({ success: false, message: "No user found" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Data fetched", data: data });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error");
  }
};

const appPersons = async (req, res) => {
  try {
    const data = await Person.find();
    if (!data) {
      return res.status(404).json("Data not found");
    }
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

const getbyworktype = async (req, res) => {
  try {
    const worktype = req.params.type;
    const data = await Person.find({ worktype: worktype });

    return res
      .status(200)
      .json({ success: true, message: "Data fetched", data: data });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
};

const updatePerson = async (req, res) => {
  try {
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res
        .status(500)
        .json({ success: false, message: "ID not in Format"});
    }
    const data = req.body;

    const newdata = await Person.findByIdAndUpdate(
      { _id: id },
       data ,
       {new:true}
    )
    if(!newdata){
        return res
        .status(500)
        .json({ success: false, message: "User not found"});
    }

    return res
      .status(200)
      .json({ success: true, message: "Data updated", data: newdata });
  } catch (error) {
    console.log(error);
    return res(500).json({ success: false, message: "Internal server error" });
  }
};

const deletePerson = async (req, res)=>{

    try {
        
        const id = req.params.id
        if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(500).json( {success:false, message:"ID not in Format"})
       
        }
        const response = await Person.findOneAndDelete({_id:id})

        if (!response){
            return res.status(500).json( {success:false, message:"User not found"})
        }
        return res.status(200).json({success:true, message:"Record deleted successfully"})

    } catch (error) {
        console.log(error);
        return res(500).json({ success: false, message: "Internal server error" });

    }
}

module.exports = {
  registerUser,
  finduser,
  appPersons,
  getbyworktype,
  updatePerson,
  deletePerson
};
