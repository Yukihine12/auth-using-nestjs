import { Entity, PrimaryColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryColumn()
    email: string;

    @Column()
    name: string;

    @Column()
    telp_no: string;

    @Column()
    address: string;

    @Column()
    city: string;

    @Column()
    province: string;

    @Column()
    country: string;

    @Column()
    postal_code: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
