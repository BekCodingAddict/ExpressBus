const mongoose=require('mongoose');

const bookingSchema=new mongoose.Schema({
    bus:{
        type:mongoose.Schema.ObjectId,
        ref:'Bus',
        require:true
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        require:true
    },
    seats:{
        type:Array,
        require:true
    },
    transactionId:{
        type:String,
        require:true
    }
},
{
    timestamps:true,
});

module.exports=mongoose.model('bookings',bookingSchema);