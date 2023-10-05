import { CiudadEstudiante } from "src/ciudad/entities/ciudad_estudiante.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EstudianteClase } from "./estudiante_clase.entity";

@Entity()
export class Estudiante {
    
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    nombre:string;

    @Column()
    apellido:string;

    //@Column()
    //fecha_nacimiento: Date;

    @OneToMany(()=>CiudadEstudiante,domicilios=>domicilios.ciudad)
    domicilios:CiudadEstudiante[];

    @OneToMany(()=>EstudianteClase,(estudianteClases)=>estudianteClases.estudiantes)
    estudianteClases:EstudianteClase[];

}
