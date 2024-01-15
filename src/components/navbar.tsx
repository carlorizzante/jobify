import { WithClassName } from '@/types';
import { UserButton } from '@clerk/nextjs';
import { DropdownNav } from './dropdown-nav';
import { ModeToggle } from './mode-toggle';

type NavbarProps = WithClassName;

export const Navbar = ({ className = '' }: NavbarProps) => (
  <nav className={`flex justify-start items-center gap-8 px-8 py-4 bg-muted ${className}`}>
    <DropdownNav />
    <div className="flex-1"></div>
    <ModeToggle />
    <UserButton afterSignOutUrl="/" />
  </nav>
)
