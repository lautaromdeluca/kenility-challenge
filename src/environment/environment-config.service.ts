import { ConfigService } from '@nestjs/config'
import { Injectable } from '@nestjs/common'

@Injectable()
export class EnvironmentConfigService {
  constructor(private readonly configService: ConfigService) { }
  getMongoUser(): string {
    return this.configService.getOrThrow<string>('MONGO_USER')
  }

  getMongoPassword(): string {
    return this.configService.getOrThrow<string>('MONGO_PASSWORD')
  }

  getMongoURL(): string {
    return this.configService.getOrThrow<string>('MONGO_URL')
  }

  getSecret(): string {
    return this.configService.getOrThrow<string>('JWT_SECRET')
  }
}
