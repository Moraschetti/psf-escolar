import { Escuela } from "src/escuela/entities/escuela.entity";
import { EstudianteClase } from "src/estudiante/entities/estudiante_clase.entity";
import { Profesor } from "src/profesor/entities/profesor.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Clase {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombre: string;

    @ManyToOne(()=>Profesor,(profesor)=>profesor.clases)
    @JoinColumn({name:"fk_id_profesor"})
    profesor:Profesor;

    @ManyToOne(()=>Escuela,(escuela)=>escuela.clases)
    @JoinColumn({name:"fk_id_escuela"})
    escuela:Escuela;

    @OneToMany(()=>EstudianteClase,(estudianteClases)=>estudianteClases.clase)
    estudianteClases:EstudianteClase[];
}
