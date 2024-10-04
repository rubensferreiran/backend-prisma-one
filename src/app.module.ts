import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [PokemonModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
