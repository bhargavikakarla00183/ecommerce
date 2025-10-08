"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviews = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.reviews = (0, pg_core_1.pgTable)("reviews", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    userId: (0, pg_core_1.integer)("user_id").notNull(),
    productId: (0, pg_core_1.integer)("product_id").notNull(),
    rating: (0, pg_core_1.integer)("rating").notNull(),
    comment: (0, pg_core_1.text)("comment").notNull(),
});
// import{ Schema, model, Document,Types} from  "mongoose";
// export interface Ireview extends Document{
//     userid:Types.ObjectId;
//     productid:Types.ObjectId;
//     rating:Number;
//     comment:string;
// }
// const reviewschema = new Schema<Ireview>({
//  userid:{type:Schema.Types.ObjectId, required:true},
//  productid:{type:Schema.Types.ObjectId, required:true},
//  rating : {type:Number, required:true},
//  comment : {type:String, required:true},
// })
// export const review = model<Ireview>('review',reviewschema)
