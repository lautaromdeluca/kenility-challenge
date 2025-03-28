import { Module } from '@nestjs/common'

import { MongooseConfigModule } from './database/mongoose.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [MongooseConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
