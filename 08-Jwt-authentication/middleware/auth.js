const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const verifyToken = (req, res, next) => {
  const token1 = req.headers.authorization;
  
  if (!token1) {
    return res.status(403).send({ auth: false, message: "Token not provided" });
  }
  const token = token1.split(' ')[1]
  console.log(token)
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    next(); // it must be called
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ success: false, message: "UnAuthorized access" });
  }
};

const generateToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn:300});
  return token;
};


const restrict = (roles) => {
    return async (req, res, next) => {
      try {
        const user = await User.findById(req.user.userId);
        if (!user || !roles.includes(user.worktype)) {
          return res
            .status(403)
            .send({ auth: false, message: "Unauthorized access (role)" });
        }
        next(); // Continue to the next middleware
      } catch (error) {
        return res
          .status(403)
          .send({ auth: false, message: "Unauthorized access (role)" });
      }
    };
  };

module.exports = { generateToken, verifyToken,restrict };
