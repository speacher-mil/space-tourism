import { cn } from '@/utils/cn';

interface MenuButtonProps {
  text: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  text,
  isSelected = false,
  onClick,
}) => {
  return (
    <button
      className={cn(
        'bg-transparent relative',
        'border-b-2 pb-4 pt-6 hover:border-[#ffffff]/50',
        isSelected ? 'border-white' : 'border-transparent',
        'text-white text-sm uppercase tracking-wider',
        'focus:outline-none',
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default MenuButton;
