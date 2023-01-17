// Back-end API RESTful
// Fastify é parecido com Express
// Prisma é um ORM, para gerir DB
// Usaremos SQLite porque gera BD local, não precisa instalar nada
import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import cors from "@fastify/cors"

const app = Fastify();
const prisma = new PrismaClient();

app.register(cors);

app.get('/', async () => {
    const habits = await prisma.habit.findMany({
        where: {
            title:{
                contains: 'Beber'
            }
        }
    });
    return habits;
});

app.listen({
    port: 3333
}).then(() => {
    console.log('Server is running on port 3333');
});