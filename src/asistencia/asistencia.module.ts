import { Module } from '@nestjs/common';
import { AsistenciaService } from './asistencia.service';
import { AsistenciaController } from './asistencia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asistencia } from './entities/asistencia.entity';
import { Estudiante } from 'src/estudiante/entities/estudiante.entity';
import { EstudianteClase } from 'src/estudiante/entities/estudiante_clase.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Asistencia,Estudiante,EstudianteClase])],
  controllers: [AsistenciaController],
  providers: [AsistenciaService],
})
export class AsistenciaModule {}
