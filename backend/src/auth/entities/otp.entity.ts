import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, OneToOne } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Entity('otps')
export class Otp {
    @PrimaryColumn()
    email: string;

    @OneToOne(() => User)
    @JoinColumn({ name: 'email' })
    user: User;

    @Column()
    code: string;

    @Column({ type: 'timestamp' })
    expires_at: Date;

    @Column({ type: 'timestamp', nullable: true })
    verified_at: Date | null;

    @CreateDateColumn()
    created_at: Date;
}