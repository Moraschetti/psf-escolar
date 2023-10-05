import { EstudianteClase } from "src/estudiante/entities/estudiante_clase.entity";
import { CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";

@Entity('asistencia')
export class Asistencia {

    @PrimaryColumn({name:'claseId'})
    claseId:number;

    @PrimaryColumn({name:'estudianteId'})
    estudianteId:number;

    @CreateDateColumn()
    fecha:Date;

    @ManyToOne(()=>EstudianteClase,(estudianteClase)=>estudianteClase.asistencias)
    estudianteClase: EstudianteClase;

    constructor(claseId:number,estudianteId:number){
        this.claseId = claseId;
        this.estudianteId = estudianteId;
    }

}
