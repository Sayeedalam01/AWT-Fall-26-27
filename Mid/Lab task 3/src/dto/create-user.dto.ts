import { 
  IsString, IsNotEmpty, MinLength, IsEmail, Matches, 
  IsInt, Min, Max, Length, IsIn, IsOptional 
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3, { message: 'Full name must be at least 3 characters' })
  fullName: string;

  @IsEmail({}, { message: 'Invalid email address' })
  email: string;

  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
    message: 'Password must contain uppercase, lowercase, number, and special character',
  })
  password: string;

  @Type(() => Number)
  @IsInt()
  @Min(18)
  @Max(60)
  age: number;

  @IsString()
  @Length(11, 11, { message: 'Phone number must be exactly 11 digits' })
  @Matches(/^01/, { message: 'Phone number must start with 01' })
  phone: string;

  @IsIn(['student', 'teacher'], { message: 'Account type must be student or teacher' })
  accountType: string;

  @IsOptional()
  @IsString()
  @MinLength(10, { message: 'Address must be at least 10 characters if provided' })
  address?: string;
}