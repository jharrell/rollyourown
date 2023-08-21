import { AppProps } from '$fresh/server.ts';
import Header from '../components/Header.tsx';

export default function App({ Component, route }: AppProps) {
  return (
    <html>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>rollyourown</title>
      </head>
      <body>
        <Header active={route} />
        <Component />
      </body>
    </html>
  );
}
