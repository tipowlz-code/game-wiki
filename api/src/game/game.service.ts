import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from 'database';

@Injectable()
export class GameService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Game[]> {
    return this.prisma.client.game.findMany({
      include: { videos: true },
    });
  }

  async findOne(id: number): Promise<Game> {
    const game = await this.prisma.client.game.findUnique({
      where: { id },
      include: { videos: true },
    });
    if (!game) {
      throw new NotFoundException(`Game with ID ${id} not found`);
    }
    return game;
  }

  async create(dto: CreateGameDto): Promise<Game> {
    return this.prisma.client.game.create({
      data: dto,
    });
  }

  async update(id: number, dto: UpdateGameDto): Promise<Game> {
    await this.findOne(id);
    return this.prisma.client.game.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number) {
    await this.findOne(id); // throws if not found
    return this.prisma.client.game.delete({
      where: { id },
    });
  }
}
