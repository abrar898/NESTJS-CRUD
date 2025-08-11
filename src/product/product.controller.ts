import { Controller,Put, Delete, Get, Post, Body, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { identity } from 'rxjs';

@Controller('product')
export class ProductController {
    constructor(private readonly productService:ProductService){}
    @Get('')
    getProducts(){
        return this.productService.getProducts();
    }

    @Get(':id')
    getProduct(@Param('id') id){
        return this.productService.getProduct(id);
    }
    @Put(':id')
    editProduct(@Param('id')id,@Body() product){
        return this.productService.editProduct(id,product);
    }

    @Post('')
    createProduct(@Body() product){
        return this.productService.createProduct(product);
    }
    
    @Delete(':id')
    deleteProduct(@Param('id')id ){
        return this.productService.deleteProduct(id);
    }
  
}
