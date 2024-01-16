'use client';

import { useState } from 'react';
import { WithChildren } from '@/types';
import {
  QueryClient,
  QueryClientProvider as Provider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const QueryClientProvider = ({ children }: WithChildren) => {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5 // 5 minutes
      }
    }
  }));

  return (
    <Provider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </Provider>
  )
}
