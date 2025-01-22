import {IsString, IsOptional, IsBoolean} from 'class-validator';

export class CreateTodoDto {
    @IsString()
    task: string;


    @IsBoolean()
    @IsOptional()
    isDone?: boolean;
}