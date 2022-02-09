import {Entity, ObjectID, ObjectIdColumn, Column} from "typeorm";

@Entity()
export class User {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    role: string;

    @Column()
    status: string;

    @Column()
    lastSession: Date;

    @Column()
    tier: number;
}
