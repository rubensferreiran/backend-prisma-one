import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PokemonService {
  constructor(private readonly prismaService: PrismaService) { }
  private readonly _include = {
    images: {
      select: {
        url: true,
      },
    },
  };
  create(data: CreatePokemonDto) {
    return this.prismaService.pokemon.create({
      data,
      include: this._include,
    });
  }

  findAll() {
    return this.prismaService.pokemon.findMany({
      include: this._include,
    });
  }

  findOne(id: number) {
    return this.prismaService.pokemon.findUnique({
      where: { id },
      include: this._include,
    });
  }

  update(id: number, data: UpdatePokemonDto) {
    return this.prismaService.pokemon.update({
      where: { id },
      data,
      include: this._include,
    });
  }

  remove(id: number) {
    return this.prismaService.pokemon.delete({
      where: { id },
    });
  }
}
