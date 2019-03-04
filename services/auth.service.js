let jwt = require('jsonwebtoken');
const config = require('../config/config');


const authenticateUser = async (username, password) => {
    try {
        let mockedUsername = 'admin';
        let mockedPassword = 'password';
        if (username && password) {
            if (username === mockedUsername && password === mockedPassword) {
                let token = jwt.sign({username: username},
                    config.secret,
                    { expiresIn: '24h' // expires in 24 hours
                    }
                  );
               return {
                  success: true,
                  message: 'Authentication successful!',
                  token: token
                };
              } else {
                res.send(403).json({
                  success: false,
                  message: 'Incorrect username or password'
                });
              }
        }
    } catch(e) {
      throw new Error(e.message)
    }
  }
  
  module.exports = {
    authenticateUser
  }