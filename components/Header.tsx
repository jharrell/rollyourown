// imported from https://fresh.deno.dev/components
// import LemonIcon from 'https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/lemon-2.tsx';
import IconDice from 'https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/dice-3.tsx';

type Props = {
  active: string;
};

export default function Header({ active }: Props) {
  const menus = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Creatures', href: '/creatures' },
  ];

  return (
    // <div class='bg-white w-full max-w-screen-lg py-6 px-8 flex flex-col md:flex-row gap-4'>
    <div class='w-full py-6 px-8 flex flex-col md:flex-row gap-4'>
      <div class='flex items-center flex-1'>
        <IconDice aria-hidden='true' />
        <div class='text-2xl  ml-1 font-bold'>
          RollYourOwn
        </div>
      </div>
      <ul class='flex items-center gap-6'>
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={'text-gray-500 hover:text-gray-700 py-1 border-gray-500' +
                (menu.href === active ? ' font-bold border-b-2' : '')}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
