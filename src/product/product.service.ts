import { Injectable } from '@nestjs/common';
import Product from './schemas/product.schema';
import mongoose from 'mongoose';
import {InjectModel} from  '@nestjs/mongoose';

@Injectable()
export class ProductService {

    constructor(
        @InjectModel(Product.name) private productModel: mongoose.Model<Product>,)
        {}

    async  getProducts(){
    const products=await this.productModel.find();    
    return products;
    }
    async getProduct(id){
        const product=await this.productModel.findById(id);
        return product;
    }
    async createProduct(productDetails){
        console.log(productDetails);
        const product= await this.productModel.create(productDetails);
        return product;
    }
    async editProduct(id,product){
        const editProduct=await this.productModel.findByIdAndUpdate(id,product,{
            new:true,
        })
        return editProduct;
    }
    async deleteProduct(id){
        const deleteProduct=await this.productModel.findByIdAndDelete(id);
        return deleteProduct;
        }
}
