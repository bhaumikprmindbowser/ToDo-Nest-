import { IsOptional, IsString, IsBoolean } from 'class-validator';

export class EditTodoDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsBoolean()
  @IsOptional()
  completed?: boolean;
}
