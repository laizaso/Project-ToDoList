import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { get } from 'http';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  //busca todos os registros
  @Get()
  async findAll() {
    return this.todoService.findAll();
  }

  //busca apenas um registro pelo id
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.todoService.findOne(id);
  }

  //cria um novo registro
  @Post()
  async create(
    @Body() data: { title: string; description: string; isDone: boolean },
  ) {
    return this.todoService.create(data);
  }

  //atualiza um registro
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: { title: string; description: string; completed: boolean },
  ) {
    return this.todoService.update(id, data);
  }

  //exclui um registro
  @Delete(':id')
  @HttpCode(204)
  async deleteByID(@Param('id') id: string) {
    return this.todoService.deleteByID(id);
  }
}
