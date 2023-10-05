import { Module } from '@nestjs/common';
import { CiudadService } from './ciudad.service';
import { CiudadController } from './ciudad.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ciudad } from './entities/ciudad.entity';
import { Escuela } from 'src/escuela/entities/escuela.entity';
import { CiudadProfesor } from './entities/ciudad_profesor.entity';
import { CiudadEstudiante } from './entities/ciudad_estudiante.entity';
import { Profesor } from 'src/profesor/entities/profesor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ciudad,Escuela,CiudadProfesor,CiudadEstudiante,Profesor])],
  controllers: [CiudadController],
  providers: [CiudadService],
})
export class CiudadModule {}
