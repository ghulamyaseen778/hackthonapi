const mongoose = require('mongoose');
const caseSchema = mongoose.Schema({
    case:{
        type:String,
        required:true,
        trim:true,
    },
    applyId:{
        type:String,
        required:true,
        trim:true,
    },
    locationFor:{
        type:String,
        required:true,
        trim:true,
    },
    For:{
        type:String,
        required:true,
        trim:true,
    },
},
{ timestamps: true })

module.exports = mongoose.model('case', caseSchema)