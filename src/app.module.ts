import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('')
    ,ProductModule], // Other modules will be imported here
  controllers: [AppController], // List of controllers
  providers: [AppService], // Services/providers for DI
})
export class AppModule {}
