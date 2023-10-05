import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAsistenciaDto } from './dto/create-asistencia.dto';
import { UpdateAsistenciaDto } from './dto/update-asistencia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Asistencia } from './entities/asistencia.entity';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class AsistenciaService {
  
  constructor(
    @InjectRepository(Asistencia)
    private readonly asistenciaRepository:Repository<Asistencia>
  ){}
  
  async create(createAsistenciaDto: CreateAsistenciaDto) {
    const asistencia = this.asistenciaRepository.create(createAsistenciaDto);
    return await this.asistenciaRepository.save(asistencia);
  }

  async findAll() {
    return await this.asistenciaRepository.find();
  }

 /* async findOne(id: number) {
    return await this.asistenciaRepository.findOneBy();
  }*/

  async update(id: number, updateAsistenciaDto: UpdateAsistenciaDto) {
    return await this.asistenciaRepository.update(id, updateAsistenciaDto);
  }

  async remove(id:number): Promise<any>{
    try{
        const criterio : FindOneOptions = { where : {id:id} }
        let asistencia : Asistencia = await this.asistenciaRepository.findOne(criterio);
        if(!asistencia)
            throw new Error('no se puede eliminar asistencia ');
        else{
            await this.asistenciaRepository.remove(asistencia);
            return { id:id,
                    message:'se elimino exitosamente'
                }
            }
    }
    catch(error){
        throw new HttpException({
            status: HttpStatus.NOT_FOUND,
            error: 'Error en asistencia - ' + error
        },HttpStatus.NOT_FOUND)
    }
}


}