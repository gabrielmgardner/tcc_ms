
// create-user.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { Roles } from 'generated/prisma';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'john@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'John' })
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ example: 'StrongPassword123!' })
  @MinLength(8)
  password: string;

  @ApiProperty({ enum: Roles, default: Roles.USER })
  role?: Roles;
}
