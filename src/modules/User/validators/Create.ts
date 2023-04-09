import {IsEmail, IsNotEmpty} from 'class-validator';

export class Create {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    provider_id: string;

    @IsNotEmpty()
    provider: string;
}