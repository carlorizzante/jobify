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
      <SearchJobsForm />
      <JobList />
    </HydrationBoundary>
  )
}
