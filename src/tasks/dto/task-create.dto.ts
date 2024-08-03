import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  userId: string;
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  content: string;
}
