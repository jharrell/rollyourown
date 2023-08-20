import { HandlerContext } from '$fresh/server.ts';
import prisma from '../../utils/prisma.ts';

export const handler = async (_req: Request, _ctx: HandlerContext): Promise<Response> => {
  const creatures = await prisma.creature.findMany();
  return new Response(JSON.stringify(creatures), {
    headers: { 'Content-Type': 'application/json' },
  });
};
