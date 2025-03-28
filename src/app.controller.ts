import { InjectConnection } from '@nestjs/mongoose'
import { Controller, Get } from '@nestjs/common'
import { Connection } from 'mongoose'

import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectConnection() private readonly connection: Connection,
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Get('db-status')
  getDbStatus(): string {
    const status = this.connection.readyState
    const statusMap = {
      0: 'Disconnected',
      1: 'Connected',
      2: 'Connecting',
      3: 'Disconnecting',
    }

    return `Database status: ${statusMap[status] || 'Unknown'}`
  }
}
