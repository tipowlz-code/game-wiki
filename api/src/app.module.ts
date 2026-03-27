import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { GameModule } from './game/game.module';
import { VideoModule } from './video/video.module';

@Module({
  imports: [PrismaModule, GameModule, VideoModule],
})
export class AppModule {}
