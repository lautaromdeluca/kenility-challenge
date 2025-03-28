import {
  SerializeInterceptor,
  ClassContrustor,
} from 'src/interceptors/serializer'
import { UseInterceptors } from '@nestjs/common'

export function Serialize(dto: ClassContrustor) {
  return UseInterceptors(new SerializeInterceptor(dto))
}
