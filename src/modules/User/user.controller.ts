import { Controller, Get, Post, Req, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { Create } from './validators/Create';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    create(@Body() data: Create): any {
        return this.userService.create(data);
    }

    @Get()
    findAll(): any {
        return this.userService.findAll();
    }
}