import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCiudadDto } from './dto/create-ciudad.dto';
import { UpdateCiudadDto } from './dto/update-ciudad.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ciudad } from './entities/ciudad.entity';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class CiudadService {

  constructor(
    @InjectRepository(Ciudad)
    private readonly ciudadRepository:Repository<Ciudad>
  ){}

  async create(createCiudadDto: CreateCiudadDto) {
    const ciudad = this.ciudadRepository.create(createCiudadDto);
    return await this.ciudadRepository.save(ciudad);
  }

  async findAll() {
    return await this.ciudadRepository.find();
  }

  async findOne(id: number) {
    return await this.ciudadRepository.findOneBy({id});
  }

  async update(id: number, updateCiudadDto: UpdateCiudadDto) {
    return await this.ciudadRepository.update(id, updateCiudadDto);
  }

  async remove(id:number): Promise<any>{
    try{
        const criterio : FindOneOptions = { where : {id:id} }
        let ciudad : Ciudad = await this.ciudadRepository.findOne(criterio);
        if(!ciudad)
            throw new Error('no se puede eliminar ciudad ');
        else{
            await this.ciudadRepository.remove(ciudad);
            return { id:id,
                    message:'se elimino exitosamente'
                }
            }
    }
    catch(error){
        throw new HttpException({
            status: HttpStatus.NOT_FOUND,
            error: 'Error en ciudad - ' + error
        },HttpStatus.NOT_FOUND)
    }
}
}