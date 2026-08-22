import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Cloud } from "../../cloud/entities/cloud.entity";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column({ default: 'user' })
    role: string;

    @OneToMany(() => Cloud, (cloud) => cloud.user)
    clouds: Cloud[];
}
