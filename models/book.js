import mongoose from 'mongoose';
const { Schema } = mongoose;
const bookSchema = new Schema(
    {
    name:{
        type:String,
        require : true
    },
   author: { type: Schema.Types.ObjectId, ref: 'User' },
    num_of_cop:{
        type:Number,
        require : true
    },
    dat_of_pub:{
        type:String,
        require : true
    }, 
    isDeg:{
        type:Boolean,
        require : true
    },
    price:Number,
    langs:Array,
    genre:String
}
    );
    const  Book = mongoose.model("Book",bookSchema)
    export default Book