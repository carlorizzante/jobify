'use client';

import { AlignLeft } from 'lucide-react';
import Link from 'next/link';
import { NAVIGATION } from '@/navigation';
import { WithClassName } from '../types/types';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

type DropdownNavProps = WithClassName & {
  classNameTrigger?: string;
};

export const DropdownNav = ({ classNameTrigger = '' }: DropdownNavProps) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild className="lg:hidden">
      <Button variant="ghost" className="text-white">
        <AlignLeft />
        <span className="sr-only">Toggle links</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56 lg:hidden" align="start" sideOffset={10}>
      {NAVIGATION.map((link) => (
        <DropdownMenuItem key={link.href}>
          <Link href={link.href} className="flex items-center gap-4">
            {link.icon}
            {link.label}
          </Link>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
)
