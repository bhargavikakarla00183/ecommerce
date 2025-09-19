import {Schema,model,Document} from 'mongoose';
export interface Iprod extends Document {
    name: string;
    description: string;
    price:number;
    discountedprice: number;
    Stock:number;
    Category: String;
    images: String;
    ratings : [{
        avgratings: number;
        noofratings: number;
    }]
       Createdat: Date;
       Updatedat: Date;
}

const prodschema = new Schema <Iprod>({
      name :{type: String , required : true },
      description:{type: String, required : true},
      price:{type: Number, required: true },
      discountedprice:{type:Number, required: true},
      Stock:{type: Number, required: true },
      Category:{type: String, required : true},
      images:[{type: String}],
      ratings :[{
        avgratings:{type: Number, required: true},
        noofratings:{type: Number, required: true}
      }],
},{timestamps: true});

export const Product =  model<Iprod>('product', prodschema);
