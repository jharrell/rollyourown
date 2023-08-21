import { PrismaClient } from '$prisma/edge.ts';
import { withAccelerate } from 'npm:@prisma/extension-accelerate@0.5.0';

const prisma = new PrismaClient().$extends(withAccelerate());

export default prisma;
