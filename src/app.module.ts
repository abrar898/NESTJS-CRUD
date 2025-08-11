import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://abrarjr66:root@cluster0.xl68d.mongodb.net/product-db?retryWrites=true&w=majority&appName=Cluster0')
    ,ProductModule], // Other modules will be imported here
  controllers: [AppController], // List of controllers
  providers: [AppService], // Services/providers for DI
})
export class AppModule {}
