const RequestAndResponseHandler = (data,HandelResponse,msg)=>{
    if(msg){
        HandelResponse.status(404).json({data:msg})
    }else{
        HandelResponse.status(200).json({data})
    }
}

module.exports=RequestAndResponseHandler