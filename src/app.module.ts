import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsistenciaModule } from './asistencia/asistencia.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { ProfesorModule } from './profesor/profesor.module';
import { CiudadModule } from './ciudad/ciudad.module';
import { ClaseModule } from './clase/clase.module';
import { EscuelaModule } from './escuela/escuela.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '1289',
        database: 'boca',
        entities: [__dirname + '/**/**/*.entity{.ts,.js}'
        ],
        synchronize: true,
  }), AsistenciaModule, EstudianteModule, ProfesorModule, CiudadModule, ClaseModule, EscuelaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
