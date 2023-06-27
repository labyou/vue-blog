import { Module } from '@nestjs/common';
import { BlogController } from '../controller/blog.controller';
import { BlogService } from '../service/blog.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogSchema } from '../schemas/blog.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Post', schema: BlogSchema }])
 ],
  controllers: [BlogController],
  providers: [BlogService]
})
export class BlogModule { }