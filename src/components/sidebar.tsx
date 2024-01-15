'use client';

import Image from 'next/image';
import Logo from '@/assets/logo.svg';
import { NAVIGATION } from '@/navigation';
import { type WithClassName } from '@/types';
import { ButtonLink } from './button-link';

type SidebarProps = WithClassName;

export const Sidebar = ({ className = '' }: SidebarProps) => {

  return (
  <aside className={`px-8 py-4 h-full ${className}`}>
    <Image src={Logo} alt="Jobify" className="mx-auto" />
    <div className="flex flex-col mt-20 gap-y-4">
      {NAVIGATION.map((link) => (
        <ButtonLink key={link.href} {...link} />
      ))}
    </div>
  </aside>
)

}
