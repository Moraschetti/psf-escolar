import { Module } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { EstudianteController } from './estudiante.controller';
import { Estudiante } from './entities/estudiante.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudianteClase } from './entities/estudiante_clase.entity';
import { Clase } from 'src/clase/entities/clase.entity';
import { Asistencia } from 'src/asistencia/entities/asistencia.entity';
import { CiudadEstudiante } from 'src/ciudad/entities/ciudad_estudiante.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Estudiante,EstudianteClase,Clase,Asistencia,CiudadEstudiante])],
  controllers: [EstudianteController],
  providers: [EstudianteService],
  exports: [TypeOrmModule]
})
export class EstudianteModule {}
