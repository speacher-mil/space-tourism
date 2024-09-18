import Logo from '@public/assets/shared/logo.svg';

import MenuButton from '@/components/navigation/button';
import { cn } from '@/utils/cn';

const NavigationBar: React.FC = () => {
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
      <Logo className="self-center" />
      <div className="bg-gray-400 mx-12 h-px flex-grow self-center" />
      <div className="bg-white/10 space-x-12 pl-72 pr-24">
        <MenuButton text="00 Menu" />
        <MenuButton text="01 Destination" />
        <MenuButton text="02 Crew" />
        <MenuButton text="03 Technology" />
      </div>
    </header>
  );
};

export default NavigationBar;
