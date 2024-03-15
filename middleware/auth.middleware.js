const jwt = require("jsonwebtoken")
const {check, validationResult} = require("express-validator")

module.exports = checkToken = (req, res, next) => {
  if (req.method === 'OPTIONS'){
     next()
  }
  try {
    const token = req.headers.authorization.split(' ')[1]
    if(!token) return res.status(401).json({message: 'Not authentificated'})

    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    req.user = decoded

    next()
  }catch(err){
    res.status(401).json({message: 'Not authentificated'})
  }
}

module.exports = validation = (req, res, next) => {
  if (req.method === 'OPTIONS'){
    next()
  }
  check('password', 'Incorrect password').isLength({min: 6})
  check('email', 'Incorrect email').isEmail()
  
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
      message: 'Некорректный данные при регистрации'
    })
  }
  next()
}