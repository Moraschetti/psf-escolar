import { Ciudad } from "src/ciudad/entities/ciudad.entity";
import { Clase } from "src/clase/entities/clase.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Escuela {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre:string;

    @Column()
    domicilio:string;

    @ManyToOne(()=>Ciudad,ciudad=>ciudad.escuelas)
    @JoinColumn({name:"fk_id_ciudad"})
    ciudad:Ciudad;

    @OneToMany(()=>Clase,clases=>clases.escuela)
    clases:Clase[];
}
