import { IsString, IsOptional, IsBoolean } from 'class-validator';


export class UpdateTodoDto {
    @IsString()
    @IsOptional()
    task?: string;


    @IsBoolean()
    @IsOptional()
    isDone?: boolean;


    @IsOptional()
    deleteaAt?: Date;
}