import { Handlers } from '$fresh/server.ts';
import Header from '../components/Header.tsx';
import prisma from '../utils/prisma.ts';

// export const handler: Handlers = {
//   async GET(_req, ctx) {
//     const res = await ctx.render();
//     return res;
//   },
// };

export default async function CreatureList() {
  const creatures = await prisma.creature.findMany();
  return (
    <main>
      <Header active='/creatures' />
      <h1>Creatures</h1>
      <h3>Here are all of our creatures:</h3>
      <ul class='flex items-center gap-6'>
        {creatures.map((creature) => <li>{creature.id} {creature.name}</li>)}
        <li>Add more!</li>
      </ul>
    </main>
  );
}
