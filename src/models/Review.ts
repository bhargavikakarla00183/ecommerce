import{ Schema, model, Document,Types} from  "mongoose";
export interface Ireview extends Document{
    userid:Types.ObjectId;
    productid:Types.ObjectId;
    rating:Number;
    comment:string;
}
const reviewschema = new Schema<Ireview>({
 userid:{type:Schema.Types.ObjectId, required:true},
 productid:{type:Schema.Types.ObjectId, required:true},
 rating : {type:Number, required:true},
 comment : {type:String, required:true},

})

export const review = model<Ireview>('review',reviewschema)