const mongoose=require('mongoose');

const busSchema=new mongoose.Schema({
    name:{
        type: String,
        require:true
    },
    number:{
        type:String,
        require:true
    },
    capacity:{
        type:Number,
        require:true
    },
    from:{
        type: String,
        require:true
    },
    to:{
        type:String,
        require:true
    },
    journeyDate:{
        type:String,
        require: true
    },
    departure:{
        type:String,
        require:true
    },
    arrival:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require:true
    },
    fare:{
        type:Number,
        require:true
    },
    seatBooked:{
        type:Array,
        default:[]
    },
    status:{
        type:String,
        default:"Yet To Start",
    }
})

module.exports=mongoose.model('buses',busSchema);