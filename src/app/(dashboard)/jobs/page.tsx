'use server';

import { fetchJobs } from '@/actions';
import {
  Heading,
  JobList,
  SearchJobsForm,
} from '@/components';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

export default async function JobsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['jobs'],
    queryFn: () => fetchJobs({})
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Heading as="h1">Jobs</Heading>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <SearchJobsForm className="sm:col-span-1 md:col-span-2 xl:col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 rounded-lg bg-muted" />
        <JobList className="contents" />
      </div>
    </HydrationBoundary>
  )
}
