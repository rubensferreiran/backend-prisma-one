import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class Pokemon implements Prisma.PokemonUncheckedCreateInput {
  id?: number;
  /**
   * The name of the Pokemon
   * @example Pikachu
   */
  @ApiProperty({ example: 'Pikachu', description: 'The name of the Pokemon' })
  name: string;

  @ApiProperty({ example: 80, description: 'The height of the Pokemon' })
  height: number;

  @ApiProperty({
    example: 'https://pokemon.com/1.png',
    description: 'The photo of the Pokemon',
  })
  images?: Prisma.ImagesUncheckedCreateNestedManyWithoutPokemonInput;
}
