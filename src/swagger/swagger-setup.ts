import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { INestApplication } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

export const setupSwagger = (app: INestApplication) => {
  const configService = app.get(ConfigService)
  const config = new DocumentBuilder()
    .setTitle('Kenility Challenge Api')
    .setDescription(
      '**Changelog URL:** [Click here](https://bitbucket.org/gapwebapps/vipo-surveys-api/src/dev-vipo-test/CHANGELOG.md)',
    )
    .setVersion(configService.get<string>('API_VERSION', 'Missing'))
    // .addApiKey(
    //   {
    //     type: 'apiKey',
    //     name: 'Authorization',
    //     in: 'header',
    //     description: 'JWT Token',
    //   },
    //   SECURITY.JWT_TOKEN,
    // )
    .build()
  const document = SwaggerModule.createDocument(app, config, {
    autoTagControllers: false,
  })
  SwaggerModule.setup('docs', app, document, {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: 'Kenility Challenge Api',
    swaggerOptions: {
      operationsSorter: 'method',
      persistAuthorization: true,
    },
  })
}
