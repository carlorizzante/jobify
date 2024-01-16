'use server';

import { fetchJobs } from '@/actions';
import { Headline } from '@/components';
import { QueryClient } from '@tanstack/react-query';

export default async function JobsPage() {
  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: ['jobs'],
    queryFn: () => fetchJobs({})
  });

  return (
    <>
      <Headline as="h1">Jobs</Headline>
    </>
  )
}
