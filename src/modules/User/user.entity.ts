import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    @Unique(['email'])
    email: string;

    @Column()
    @Unique(['provider_id'])
    provider_id: string;

    @Column()
    provider: string;
}