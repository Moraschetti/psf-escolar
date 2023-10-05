import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CreateClaseDto {
    
    @PrimaryGeneratedColumn()
    id:number;
}
