"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.products = (0, pg_core_1.pgTable)("products", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.varchar)("name", { length: 255 }).notNull(),
    description: (0, pg_core_1.text)("description").notNull(),
    price: (0, pg_core_1.numeric)("price").notNull(),
    discountedPrice: (0, pg_core_1.numeric)("discounted_price").notNull(),
    stock: (0, pg_core_1.integer)("stock").notNull(),
    category: (0, pg_core_1.varchar)("category", { length: 255 }).notNull(),
    productId: (0, pg_core_1.integer)("product_id").notNull(),
    imageUrl: (0, pg_core_1.text)("image_url").notNull(),
    avgRating: (0, pg_core_1.numeric)("avg_rating").notNull(),
    noOfRatings: (0, pg_core_1.integer)("no_of_ratings").notNull(),
    createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at").defaultNow(),
});
// import {Schema,model,Document} from 'mongoose';
// export interface Iprod extends Document {
//     name: string;
//     description: string;
//     price:number;
//     discountedprice: number;
//     Stock:number;
//     Category: String;
//     images: String;
//     ratings : [{
//         avgratings: number;
//         noofratings: number;
//     }]
//        Createdat: Date;
//        Updatedat: Date;
// }
// const prodschema = new Schema <Iprod>({
//       name :{type: String , required : true },
//       description:{type: String, required : true},
//       price:{type: Number, required: true },
//       discountedprice:{type:Number, required: true},
//       Stock:{type: Number, required: true },
//       Category:{type: String, required : true},
//       images:[{type: String}],
//       ratings :[{
//         avgratings:{type: Number, required: true},
//         noofratings:{type: Number, required: true}
//       }],
// },{timestamps: true});
// export const Product =  model<Iprod>('product', prodschema);
