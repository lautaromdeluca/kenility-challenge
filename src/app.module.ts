import { Module } from '@nestjs/common'

import { HealthCheckController } from './health-check/health-check.controller'
import { HealthCheckModule } from './health-check/health-check.module'
import { MongooseConfigModule } from './database/mongoose.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [MongooseConfigModule, HealthCheckModule],
  controllers: [AppController, HealthCheckController],
  providers: [AppService],
})
export class AppModule { }
