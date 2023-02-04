const MsgFunc = require('../helper/msg');
const RequestAndResponseHandler = require('../helper');
const { createSignUpData,LoginData } = require('../database/registration');

const LoginService = (req,res)=>{
    let Query = req.body
    try {
        LoginData(Query,res)
    } catch (error) {
        RequestAndResponseHandler(MsgFunc.msg1,null,res)
    }
}

const SignUpService = (req,res)=>{
    const Query = req.body //body string
    console.log(Query,"data")
    try {
        createSignUpData(Query,res)
    } catch (error) {
        RequestAndResponseHandler(MsgFunc.msg1,null,res)
    }
}
module.exports={LoginService,SignUpService}