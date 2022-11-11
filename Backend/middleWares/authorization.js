const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.headers.authorization

  // console.log(token)

  try {
    if (token) {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
      console.log(decoded)

      // attach the decoded data to the res.locals object
      res.locals.id = decoded.id

      next()
    } else res.status(403).json({
      success: false,
      msg: "No Token Exists",
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      msg: 'Invalid Token'
    })
  }
}