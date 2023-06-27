import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModuleTsModule } from './src/blog/blog.module.ts.module';
import { BlogService } from './src/service/blog/blog.service';
import { BlogController } from './controller/blog/blog.controller';
import { BlogModule } from './modules/blog/blog.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://0.0.0.0:27017/'),
    BlogModuleTsModule,
    BlogModule,
  ],
  controllers: [AppController, BlogController],
  providers: [AppService, BlogService],
})
export class AppModule {}
