import {Entity, PrimaryGeneratedColumn, Column, Index} from "typeorm";

@Entity()
export class Roles {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    active: boolean;

    @Column()
    createdBy: number;

    @Column()
    updatedBy: number;

    @Column({ default: null, nullable: true })
    endAt: number;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

}
