import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Estudiante } from './entities/estudiante.entity';
import { EstudianteClase } from './entities/estudiante_clase.entity';
import { Clase } from 'src/clase/entities/clase.entity';

@Injectable()
export class EstudianteService {

  constructor(
  @InjectRepository(Estudiante)
    private readonly estudianteRepository:Repository<Estudiante>,
  //  private readonly estudianteClaseRepository:Repository<EstudianteClase>,
   // private readonly claseRepository:Repository<Clase>
  ){}

  async create(createEstudianteDto: CreateEstudianteDto) {
    const estudiante = await this.estudianteRepository.create(createEstudianteDto);
    if(estudiante)
      return `se creo estudiante ${estudiante.nombre} ${estudiante.apellido}`;
    else
      return 'no se creo estudiante';
    //return await this.estudianteRepository.save(estudiante);
  }

 /* async addClase(body):Promise<any>{
    const {claseId,estudianteId} = body;
    const estudiante = await this.estudianteRepository.findOne({where:{id:estudianteId}})
    if(!estudiante)
      return `error - no se encontre el estudiante con id ${estudianteId}`;
    const clase = await this.claseRepository.findOne({where:{id:claseId}})
    if(!clase)
      return 'error - no se encontro esa clase';
    const clase_estudiante = await this.estudianteClaseRepository.findOne({where:{claseId:claseId,estudianteId:estudianteId}})
    if(clase_estudiante)
      return 'error - el estudiante ya tiene asignada esa clase';
    return await this.estudianteClaseRepository.save(new EstudianteClase(estudianteId,claseId));
  }*/

  async findAll() {
    return await this.estudianteRepository.find();

  }

  async findOne(id: number) {
    return await this.estudianteRepository.findOneBy({id}) ;
  }

  async update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
    return await this.estudianteRepository.update(id, updateEstudianteDto);
  }

  async remove(id:number): Promise<any>{
    try{
        const criterio : FindOneOptions = { where : {id:id} }
        let estudiante : Estudiante = await this.estudianteRepository.findOne(criterio);
        if(!estudiante)
            throw new Error('no se puede eliminar estudiante ');
        else{
            await this.estudianteRepository.remove(estudiante);
            return { id:id,
                    message:'se elimino exitosamente'
                }
            }
    }
    catch(error){
        throw new HttpException({
            status: HttpStatus.NOT_FOUND,
            error: 'Error en estudiante - ' + error
        },HttpStatus.NOT_FOUND)
    }
}
}
