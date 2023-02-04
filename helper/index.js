const RequestAndResponseHandler = (msg,data,HandelResponse)=>{
    if(msg){
        HandelResponse.status(400).json({data:msg})
    }else{
        HandelResponse.status(200).json({data})
    }
}

module.exports=RequestAndResponseHandler