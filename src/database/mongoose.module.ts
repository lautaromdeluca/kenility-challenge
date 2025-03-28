import { EnvironmentConfigService } from 'src/environment/environment-config.service'
import { EnvironmentConfigModule } from 'src/environment/environment-config.module'
import { MongooseModule } from '@nestjs/mongoose'
import { Module } from '@nestjs/common'

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [EnvironmentConfigModule],
      inject: [EnvironmentConfigService],
      useFactory: async (config: EnvironmentConfigService) => ({
        uri: config.getMongoURL(),
        user: config.getMongoUser(),
        pass: config.getMongoPassword(),
        authSource: 'admin',
      }),
    }),
  ],
  exports: [MongooseModule],
})
export class MongooseConfigModule {}
