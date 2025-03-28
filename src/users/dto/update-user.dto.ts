import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({
    description: 'The email address of the user',
    example: 'user@example.com',
    required: false,
  })
  email?: string;

  @ApiProperty({
    description: 'The name of the user',
    example: 'John Doe',
    required: false,
  })
  name?: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'password123',
    minLength: 6,
    required: false,
  })
  password?: string;
}
