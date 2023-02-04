const UserSchema = require('../Modals/userSchema')
const MsgFunc = require('../helper/msg')
const RequestAndResponseHandler = require('../helper')

const createSignUpData = (queryObject, res) => {
  try {
    UserSchema.create(queryObject, (err, data) => {
      if (err) {
        RequestAndResponseHandler(MsgFunc.msg1, null, res)//check error
      } else {
        RequestAndResponseHandler(null, data, res)//check data and send response
      }
    })
  } catch (error) {
    RequestAndResponseHandler(MsgFunc.msg1, null, res)
  }
}
const LoginData = ({ email,password }, res) => {
  try {
    UserSchema.findOne({ email }, (err) => {
      if (err) {
        RequestAndResponseHandler(MsgFunc.msg1, null, res)//check error
      } else {
        UserSchema.findOne({password}, (err, data) => {
          if (err) {
            RequestAndResponseHandler(MsgFunc.msg1, null, res)//check error
          } else {
            RequestAndResponseHandler(null, data, res)//check data and send response
          }
        })
      }
    })
  } catch (error) {
    RequestAndResponseHandler(MsgFunc.msg1, null, res)
  }
}

module.exports = { createSignUpData, LoginData }