const User = require("../schema/userSchema");
const jwt = require("jsonwebtoken");

const validateLogin = async (req, res, next) => {
  const { email, password } = req.body;
  let user, token;
  try {
    const tokenBearer = req.header("Authorization");
    if (tokenBearer) {
      token = tokenBearer.replace("Bearer ", "");
      if (!jwt.verify(token, "secretToken")) {
        throw new Error("Token has expired");
      }
      user = await User.findByToken(token);
      req.token = token;
      req.user = user;
    } else {
      user = await User.findByCredentials(email, password);
      const generateToken = await user.generateToken();
      req.token = generateToken;
      req.user = user;
    }
    next()
  } catch (error) {
    if (error.message.includes("expired")) {
      const user = await User.findByToken(token);
      if (user) {
        user.tokens = user.tokens.filter(
          (filToken) => filToken.token !== token
        );
        await user.save();
      }
    }
    res.status(400).send(["ERROR", error.message]);
  }

  
};

module.exports = validateLogin;
