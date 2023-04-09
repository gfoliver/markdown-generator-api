import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import AppError from '../ErrorHandling/AppError';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    async create(data: Omit<User, "id">): Promise<User> {
        // check if user with email or provider_id already exists
        // if so, throw error
        const userAlreadyExists = await this.usersRepository.findOne({
            where: [{ email: data.email }, { provider_id: data.provider_id }],
        });

        if (userAlreadyExists) {
            throw new AppError('User already exists');
        }

        const user = this.usersRepository.create(data);

        return this.usersRepository.save(user);
    }

    byId(id: string): Promise<User> {
        return this.usersRepository.findOne({ where: { id } });
    }

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }
}