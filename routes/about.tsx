import { Handlers } from '$fresh/server.ts';
import Header from '../components/Header.tsx';

export const handler: Handlers = {
  async GET(_req, ctx) {
    const res = await ctx.render();
    res.headers.set('X-Custom-Header', 'Hi there');
    return res;
  },
};

export default function About() {
  return (
    <main>
      <Header active='/about' />
      <h1>About</h1>
      <p>This is the about page.</p>
    </main>
  );
}
