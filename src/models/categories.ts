import {Schema , model , Document} from 'mongoose';
export interface Icategories extends Document{
    name: String;
    description: String;
}
const Categoryschema = new Schema<Icategories>({
   name :{ type: String, required: true, unique: true },
   description:{type: String,}
});

export const Category = model<Icategories>('categorie',Categoryschema)

