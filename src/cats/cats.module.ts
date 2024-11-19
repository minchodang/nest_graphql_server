import { Module } from '@nestjs/common';
import { CatsResolver } from './cats.resolver';
import { CatsService } from './cats.service';

@Module({
  providers: [CatsResolver, CatsService], // 리졸버와 서비스를 주입
})
export class CatsModule {}
