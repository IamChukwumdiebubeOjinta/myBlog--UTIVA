const UserModel = require('../models/User')

module.exports = async (req, res, next) => {
  const { id } = res.locals

  try {
    const userExist = await UserModel.findById(id);

    if (userExist) {
      res.locals.user = userExist
      next()
    }
    else {
      res.status(404).json({
        success: false,
        msg: "User not found",
      })
    }
  } catch (error) {
    console.log(error.name + ': ' + error.message);
    res.status(500).json({
      success: false,
      msg: "Something went wrong"
    })
  }
}