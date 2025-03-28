import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(process.env.PORT ?? 3000)
  // eslint-disable-next-line @/no-restricted-properties
  console.log(`
  ===========================
  🚀 App is running on http://localhost:${process.env.NODE_LOCAL_PORT}
  ===========================
`)
}
bootstrap()
