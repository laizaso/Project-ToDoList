import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  // Inicializa o Prisma quando o módulo for carregado
  async onModuleInit() {
    await this.$connect();
  }

  // Desconecta o Prisma quando o módulo for destruído
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
