import { pgTable, serial, varchar, text, numeric, integer, timestamp } from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description").notNull(),
  price: numeric("price").notNull(),
  discountedPrice: numeric("discounted_price").notNull(),
  stock: integer("stock").notNull(),
  category: varchar("category", { length: 255 }).notNull(),
  productId: integer("product_id").notNull(),   
  imageUrl: text("image_url").notNull(),
  avgRating: numeric("avg_rating").notNull(),
  noOfRatings: integer("no_of_ratings").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
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


