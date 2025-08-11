import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export default class Product {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  category:string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
