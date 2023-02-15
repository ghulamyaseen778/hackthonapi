const UserSchema = require('../Modals/userSchema')
const MsgFunc = require('../helper/msg')
const RequestAndResponseHandler = require('../helper')

const createSignUpData = (queryObject, res) => {
  try {
    UserSchema.create(queryObject, (err, data) => {
      if (err) {
        RequestAndResponseHandler( "", res,MsgFunc.msg1)//check error
      } else {
        RequestAndResponseHandler(data, res)//check data and send response
      }
    })
  } catch (error) {
    RequestAndResponseHandler("", res,MsgFunc.msg1)
  }
}
const LoginData = ({ email,password }, res) => {
  try {
    UserSchema.findOne({ email }, (err) => {
      if (err) {
        RequestAndResponseHandler( "", res,MsgFunc.msg1)//check error
      } else {
        UserSchema.findOne({password}, (err, data) => {
          if (err) {
            RequestAndResponseHandler("", res,MsgFunc.msg1)//check error
          } else {
            RequestAndResponseHandler( data, res)//check data and send response
          }
        })
      }
    })
  } catch (error) {
    RequestAndResponseHandler("", res,MsgFunc.msg1)
  }
}

module.exports = { createSignUpData, LoginData }