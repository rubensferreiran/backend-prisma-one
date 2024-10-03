import { IsInt, IsOptional, IsString } from 'class-validator';
import { Pokemon } from '../entities/pokemon.entity';
import { Prisma } from '@prisma/client';

export class CreatePokemonDto extends Pokemon {
  @IsString()
  name: string;

  @IsInt()
  height: number;

  @IsOptional()
  images?: Prisma.ImagesUncheckedCreateNestedManyWithoutPokemonInput;
}
