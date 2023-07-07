const User = require("../controller/userController");

exports.home = (req, res) => {
  req.status(200).send("Welcome to Home Page");
};

// register user

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.create(req.body);
    console.log(user);
    res.status(201).send("User registered successfully");
  } catch (error) {
    console.log(error);
    res.status(404).send("Page not found");
  }
};

// login user

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userInfo = await User.findOne({ email });

    if (userInfo) {
      if (userInfo.password === password) {
        res.status(201).send("You have logged in successfully");
      } else {
        res.status(500).send("You have entered wrong password");
      }
    }

    res.status(400).send("No account are found with this email");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
