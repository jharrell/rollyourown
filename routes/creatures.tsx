import { Handlers } from '$fresh/server.ts';
import prisma from '../utils/prisma.ts';

// export const handler: Handlers = {
//   async GET(_req, ctx) {
//     const res = await ctx.render();
//     return res;
//   },
// };

export default async function CreatureList() {
  const creatures = await prisma.creature.findMany();
  const creatureList = creatures.map((creature) => <li>{creature.id} {creature.name}</li>);
  return (
    <main>
      <h1>Creatures</h1>
      <h3>Here are all of our creatures:</h3>
      <ul class='flex items-center gap-6'>
        {creatureList.length ? creatureList : (
          <li>
            No creatures! <a href='/creatures/new'>Add some :)</a>
          </li>
        )}
      </ul>
    </main>
  );
}
