const UserSchema = require('../Modals/userSchema')
const MsgFunc = require('../helper/msg')
const RequestAndResponseHandler = require('../helper')

const createSignUpData = (queryObject, res) => {
  try {
   UserSchema.findOne({email:queryObject.email},(err,data)=>{
    if(data!=null){
      RequestAndResponseHandler( "", res,MsgFunc.msg1)//check error
    }
    else{
      UserSchema.create(queryObject, (err, data) => {
        if (!data) {
          RequestAndResponseHandler( "", res,MsgFunc.msg1)//check error
        } else {
          const {user_name,email,password,mobile_no,joining,_id} = data
          RequestAndResponseHandler({
            token:_id,
            userName:user_name,
            email,
            joining,
            mobileNumber:mobile_no
          }, res)//check data and send response
        }
      })
    }
   })
  } catch (error) {
    RequestAndResponseHandler("", res,MsgFunc.msg1)
  }
}
const LoginData = ({ email,password }, res) => {
  try {
    UserSchema.findOne({ email }, (err,data) => {
      // console.log(err,"err")
      if (!data) {
        RequestAndResponseHandler( "", res,MsgFunc.msg1)//check error
      } else {
        UserSchema.findOne({password}, (err, data) => {
          if (!data) {
            RequestAndResponseHandler("", res,MsgFunc.msg1)//check error
          } else {
            const {user_name,email,password,mobile_no,joining,_id,role} = data
          RequestAndResponseHandler({
            token:_id,
            userName:user_name,
            email,
            joining,
            mobileNumber:mobile_no,
            role:role?role:"user"
          }, res)//check data and send response //check data and send response
          }
        })
      }
    })
  } catch (error) {
    RequestAndResponseHandler("", res,MsgFunc.msg1)
  }
}

module.exports = { createSignUpData, LoginData }