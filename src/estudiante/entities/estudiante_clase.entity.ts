import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Estudiante } from "./estudiante.entity";
import { Clase } from "src/clase/entities/clase.entity";
import { Asistencia } from "src/asistencia/entities/asistencia.entity";

@Entity('clase_estudiante')
export class EstudianteClase{
    @PrimaryColumn()
    estudianteId:number;

    @PrimaryColumn()
    claseId:number;

    constructor(estudianteId:number,claseId:number){
        this.estudianteId = estudianteId;
        this.claseId = claseId;
    }
    
    @ManyToOne(()=>Estudiante,(estudiantes)=>estudiantes.estudianteClases)
    estudiantes:Estudiante;

    @OneToMany(()=>Asistencia,(asistencias)=>asistencias.estudianteClase)
    asistencias:Asistencia[];

    @ManyToOne(()=>Clase,(clase)=>clase.estudianteClases)
    clase:Clase;
}