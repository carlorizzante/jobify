import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavLink } from '@/types';
import { Button } from './ui/button';

type ButtonLinkProps = NavLink;

export const ButtonLink = ({ href, label, icon }: ButtonLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const variant = isActive ? 'default' : 'secondary';
  return (
  <Button asChild variant={variant}>
    <Link
      href={href}
      className="flex items-center gap-x-4"
    >
      {icon}
      <span>{label}</span>
    </Link>
  </Button>
)

}
