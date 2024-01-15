import {
  AppWindow,
  AreaChart,
  Layers,
} from 'lucide-react';
import { type NavLink } from './types';

export const NAVIGATION: NavLink[] = [
  {
    href: '/add-job',
    label: 'Add Job',
    icon: <Layers />
  },
  {
    href: '/jobs',
    label: 'Jobs',
    icon: <AppWindow />
  },
  {
    href: '/stats',
    label: 'Stats',
    icon: <AreaChart />
  },
];
