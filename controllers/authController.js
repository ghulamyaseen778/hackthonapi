const {LoginService,SignUpService} = require('../service/AuthService')

const AuthControllers = {
    LoginController: (req, res) => {
        LoginService(req, res)
    },

    SignUpController: (req, res) => {
        SignUpService(req, res)
    }
}

module.exports = {AuthControllers}