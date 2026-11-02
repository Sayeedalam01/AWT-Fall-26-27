import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('users')
export class UsersController {
  
  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    const { password, ...userData } = createUserDto;
    
    return {
      statusCode: 201,
      message: 'User registered successfully',
      data: userData, 
    };
  }
}