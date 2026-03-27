import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';

@Injectable()
export class VideoService {
  constructor(private readonly prisma: PrismaService) {}

  async findByGame(gameId: number) {
    return this.prisma.client.video.findMany({
      where: { gameId },
    });
  }

  async findOne(id: number) {
    const video = await this.prisma.client.video.findUnique({ where: { id } });
    if (!video) throw new NotFoundException(`Video with ID ${id} not found`);
    return video;
  }

  async create(dto: CreateVideoDto) {
    return this.prisma.client.video.create({ data: dto });
  }

  async update(id: number, dto: UpdateVideoDto) {
    await this.findOne(id);
    return this.prisma.client.video.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.client.video.delete({ where: { id } });
  }
}
