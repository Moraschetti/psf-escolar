import { CiudadProfesor } from "src/ciudad/entities/ciudad_profesor.entity";
import { Clase } from "src/clase/entities/clase.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profesor {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre:string;

    @Column()
    apellido:string;

    @OneToMany(()=>Clase,clase=>clase.profesor)
    clases:Clase[];
    
    @OneToMany(()=>CiudadProfesor,domicilios=>domicilios.ciudad)
    domicilios:CiudadProfesor[];
    
constructor(nombre:string,apellido:string){
    this.nombre = nombre;
    this.apellido = apellido;
}
}
