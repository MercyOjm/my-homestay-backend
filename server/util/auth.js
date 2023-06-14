const jwt = require("jsonwebtoken");
const { verifyToken } = require( "./jwt.js");
const { User } = require ("../user/user.model.js");
const createError = require( "http-errors");

//middleware function to protect routes by verifying tokens
const protect = function () {
  console.log('protect middleware');
  return async (req, res, next) => {
    console.log(req.cookies.access_token);
    let token;
    try {
      //get the token from Authorization header
      const authHeader = req.headers["authorization"];
      token =
        authHeader &&
        authHeader.startsWith("Bearer") &&
        authHeader.split(" ")[1];

      //get token from the cookie
      token = req.cookies.access_token;

      if (!token) {
        throw createError(401, "Token Not Found!");
      }

      /* ----------------------- verify the token ----------------------- */
      const decoded = await verifyToken(token, process.env.JWT_SECRET);
      next();
    } catch (error) {
      next(error);
    }
  };
};

module.exports={protect};