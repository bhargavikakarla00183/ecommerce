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

// src/models/reviews.ts
import { pgTable, serial, integer, text } from "drizzle-orm/pg-core";

/** Reviews table */
export const reviews = pgTable("reviews", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),       // FK → users.id
  productId: integer("product_id").notNull(), // FK → products.id
  rating: integer("rating").notNull(),
  comment: text("comment").notNull(),
});
