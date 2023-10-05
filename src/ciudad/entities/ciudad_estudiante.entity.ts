import { Estudiante } from "src/estudiante/entities/estudiante.entity";
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Ciudad } from "./ciudad.entity";

@Entity()
export class CiudadEstudiante{
    
    @PrimaryColumn()
    ciudadId:number;

    @PrimaryColumn()
    estudianteId:number;

    @Column()
    direccion:string;

    constructor(ciudadId:number,estudianteId:number,direccion:string){
        this.ciudadId = ciudadId;
        this.estudianteId = estudianteId;
        this.direccion = direccion;
    }

    @ManyToOne(()=>Estudiante,(estudiante)=>estudiante.domicilios)
    estudiante:Estudiante;

    @ManyToOne(()=>Ciudad,(ciudad)=>ciudad.domicilios)
    ciudad:Ciudad; 
}