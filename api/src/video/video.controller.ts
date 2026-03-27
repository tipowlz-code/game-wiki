import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { VideoService } from './video.service.js';
import { CreateVideoDto } from './dto/create-video.dto.js';
import { UpdateVideoDto } from './dto/update-video.dto.js';

@Controller('videos')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Get('game/:gameId')
  findByGame(@Param('gameId', ParseIntPipe) gameId: number) {
    return this.videoService.findByGame(gameId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.videoService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateVideoDto) {
    return this.videoService.create(dto);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateVideoDto) {
    return this.videoService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.videoService.remove(id);
  }
}
