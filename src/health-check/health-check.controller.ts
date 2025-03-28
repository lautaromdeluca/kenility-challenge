import { CustomApiOkResponse } from 'src/decorators/swagger'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { Serialize } from 'src/decorators/serializer'
import { InjectConnection } from '@nestjs/mongoose'
import { Controller, Get } from '@nestjs/common'
import { Connection } from 'mongoose'

import { HealthCheckResponseDto } from './dto/health-check.dto'
import { HealthCheckService } from './health-check.service'

@Controller('health-check')
export class HealthCheckController {
  constructor(private readonly healthCheckService: HealthCheckService) {}

  @ApiTags('Health')
  @ApiOperation({
    summary: 'Health Check',
    description: 'Returns the current status and uptime of the service.',
  })
  @CustomApiOkResponse(HealthCheckResponseDto)
  @Serialize(HealthCheckResponseDto)
  @Get()
  health() {
    return this.healthCheckService.getStatus()
  }
}
