const userModel = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await userModel.find();
    if (!users) return res.status(404).json({
      success: false,
      msg: "No Users Found"
    }); else return res.status(200).json({
      success: true,
      data: users
    });

  } catch (err) {
    console.log('error: ', err);

  }
};

exports.createUser = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  if (firstName == '' || lastName == '' || email == '' || password == '') return res.status(400).json({
    success: false,
    msg: 'All credentials are required.'
  });

  try {
    const existingUser = await userModel.findOne({ email })
    if (existingUser) {
      return res
        .status(400)
        .json({
          success: false,
          msg: "User Already Exists!"
        });
    } else {
      const hashedPassword = bcrypt.hashSync(password);

      const newUser = new userModel({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        blogs: []
      });

      await newUser.save();
      return res.status(201).json({
        success: true,
        msg: 'User created successfully',
        data: newUser
      })
    }
  } catch (error) {
    console.log(error.name, error.message)
    res.status(501).json({
      success: false,
      msg: 'An error occurred',
      error: error.name + ': ' + error.message
    })
  }
}

exports.userLogin = async (req, res, next) => {
  const { email, password } = req.body
  if (email == '' || password == '') return res.status(400).json({
    success: false,
    msg: 'All credentials are required.'
  });

  console.log(req.body)

  try {
    const existingUser = await userModel.findOne({ email })
    if (existingUser) {
      const checkPassword = await bcrypt.compare(password, existingUser.password)
      if (checkPassword) {
        const tokenPayload = {
          id: existingUser._id,
        }

        const accessToken = jwt.sign(tokenPayload, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: '3d'
        })
        res.status(200).json({
          success: true,
          msg: "login successful!",
          user: existingUser,
          data: { accessToken, user: existingUser }
        })
      } else {
        res.status(403).json({
          success: false,
          msg: 'Invalid Password'
        })
      }
    } else {
      return res
        .status(404)
        .json({
          success: false,
          msg: "User not found!"
        });
    }
  } catch (err) {
    console.log(err.name, err.message)
    res.status(401).json({
      success: false,
      msg: 'An error occurred',
      error: err.name + ": " + err.message
    })
  }
}

// Delete user
// Update user