import { IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
export class EditUserDto {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  name?: string;
}
