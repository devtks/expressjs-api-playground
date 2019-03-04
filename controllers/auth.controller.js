const { authService } = require('../services')
const { authenticateUser } = authService

const loginUser = async (req, res, next) => {
  const { username, password } = req.body
  try {
    let result = await authenticateUser(username, password)
    res.json(result)
    next()
  } catch (e) {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  }
}

module.exports = {
  loginUser
}
