const User = require("./schema/userSchema");
const jwt = require("jsonwebtoken");

const addUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const data = {
      name,
      email,
      password,
    };
    const user = await User.create(data);
    const token = await user.generateToken();
    res.status(200).send({ user, token });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllUsers = async (req, res) => {
  const usersData = await User.find();
  if (usersData.length <= 0) {
    res.status(200).send("Sorry, There Is No Users To Show");
  } else {
    res.status(400).send(usersData);
  }
};

const updateUser = async (req, res) => {
  const { email } = req.params;
  const { name, password } = req.body;
  try {
    if (await User.findOne({ email })) {
      const user = await User.findOne({ email });
      user.name = name;
      user.password = password;
      await user.save();
      res.status(200).send(user);
    } else {
      throw new Error("User Not Found");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const login = async (req, res) => {
  let user;
  const { email, password, token } = req.body;
  try {
    if (token) {
      if (jwt.verify(token, "secretToken")) {
        user = await User.findByToken(token);
        if (!user) throw new Error("Token has expired");
        return res.status(200).send(["Logged In", user, token]);
      } else {
        throw new Error("Token has expired");
      }
    }
    user = await User.findByCredentials(email, password);
    const generateToken = await user.generateToken();
    res.status(200).send(["Logged In", user, generateToken]);
  } catch (error) {
    if (error.message.includes("expired")) {
      const user = await User.findByToken(token);
      if (user) {
        user.tokens = user.tokens.filter((token) => {
          token.token !== token;
        });
        await user.save();
      }  
    }
    res.status(400).send(error.message);
  }
};

module.exports = { addUser, getAllUsers, updateUser, login };
