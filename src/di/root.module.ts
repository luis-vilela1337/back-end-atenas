import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PresentationModule } from './presentation.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URL), PresentationModule],
  controllers: [],
  providers: [],
})
export class RootModule {}
