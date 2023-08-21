import { Handlers } from '$fresh/server.ts';

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
      <h1>About</h1>
      <p>This is the about page.</p>
    </main>
  );
}
