import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavLink } from '../types/types';
import { Button } from './ui/button';

type ButtonLinkProps = NavLink;

export const ButtonLink = ({ href, label, icon }: ButtonLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const variant = isActive ? 'default' : 'secondary';
  const color = isActive ? '' : 'text-blue-500';
  return (
    <Button asChild variant={variant}>
      <Link
        href={href}
        className={`flex items-center gap-x-4 w-full ${color}`}
      >
        <span>{icon}</span>
        <span className="flex-1">{label}</span>
      </Link>
    </Button>
  )

}
