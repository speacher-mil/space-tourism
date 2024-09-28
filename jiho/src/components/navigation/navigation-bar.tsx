'use client';
import Logo from '@public/assets/shared/logo.svg';

import MenuButton from '@/components/navigation/button';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavigationBar: React.FC = () => {
  const path = usePathname();

  return (
    <header
      className={cn(
        'flex flex-row',
        'w-screen',
        'px-8 py-12',
        'place-content-between',
        'sticky',
      )}
    >
      <Link href='/'>
        <Logo className="self-center" />
      </Link>
      <div className="bg-gray-400 mx-12 h-px flex-grow self-center" />
      <div className="bg-white/10 space-x-12 pl-72 pr-24">
        <Link href='/'>
          <MenuButton text="00 Menu" isSelected={path === '/'} />
        </Link>
        <Link href='/destination'>
          <MenuButton text="01 Destination" isSelected={path === '/destination'}/>
        </Link>
        <Link href='/crew'>
          <MenuButton text="02 Crew" isSelected={path === '/crew'} />
        </Link>
        <Link href='/technology'>
          <MenuButton text="03 Technology" isSelected={path === '/technology'} />
        </Link>
      </div>
    </header>
  );
};

export default NavigationBar;
