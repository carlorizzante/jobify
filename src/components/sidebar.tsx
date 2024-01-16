'use client';

import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/logo.svg';
import { NAVIGATION } from '@/navigation';
import { type WithClassName } from '../types/types';
import { ButtonLink } from './button-link';

type SidebarProps = WithClassName;

export const Sidebar = ({ className = '' }: SidebarProps) => {

  return (
    <aside className={`px-8 py-4 h-full bg-muted ${className}`}>
      <Link href="/">
        <Image src={Logo} alt="Jobify" className="mx-auto" />
      </Link>
      <div className="flex flex-col gap-y-4 mt-20 p-4">
        {NAVIGATION.map((link) => (
          <ButtonLink key={link.href} {...link} />
        ))}
      </div>
    </aside>
  )

}
