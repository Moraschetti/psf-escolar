import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profesor } from './entities/profesor.entity';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class ProfesorService {

  constructor(
  @InjectRepository(Profesor)
  private readonly profesorRepository:Repository<Profesor>
  ){}

  async create(createProfesorDto: CreateProfesorDto) {
    const profesor = await this.profesorRepository.create(createProfesorDto);
    if(profesor)
      return `se creo profesor ${profesor.nombre} ${profesor.apellido}`;
    else
      return 'no se creo profesor';
    //return await this.profesorRepository.save(profesor);
  }
  
  async findAll() {
    return await this.profesorRepository.find();

  }

  async findOne(id: number) {
    return await this.profesorRepository.findOneBy({id});
  }

  async update(id: number, updateProfesorDto: UpdateProfesorDto) {
    return await this.profesorRepository.update(id, updateProfesorDto);
  }

  async remove(id:number): Promise<any>{
    try{
        const criterio : FindOneOptions = { where : {id:id} }
        let profesor : Profesor = await this.profesorRepository.findOne(criterio);
        if(!profesor)
            throw new Error('no se puede eliminar profesor ');
        else{
            await this.profesorRepository.remove(profesor);
            return { id:id,
                    message:'se elimino exitosamente'
                }
            }
    }
    catch(error){
        throw new HttpException({
            status: HttpStatus.NOT_FOUND,
            error: 'Error en profesor - ' + error
        },HttpStatus.NOT_FOUND)
    }
}
}
