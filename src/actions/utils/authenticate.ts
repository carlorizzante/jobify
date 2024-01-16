'use server';

import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';

export const authenticate = () => {
  const { userId } = auth();
  if (!userId) redirect('/');
  return userId;
}
