import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';


@Injectable()
export class TodoService {
    constructor(private readonly prisma: PrismaService) {}


    async findAll() {
        return this.prisma.todo.findMany();
    }


    async findOne(id:string) {
        return this.prisma.todo.findUnique({where: {id}});
    }



    async create(data: {title:string, completed?:boolean}) {
        return this.prisma.todo.create({data});
    }


    async update(id:string, data: {title:string; completed?:boolean}) {
        return this.prisma.todo.update
    }


    async deleteByID (id: string) {
        return this.prisma.todo.delete ({where: {id}}); 
    }
}
