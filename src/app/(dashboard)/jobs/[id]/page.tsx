'use server';

import { fetchJob } from '@/actions';
import {
  EditJobForm,
  Heading,
} from '@/components';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

type JobPageProps = {
  params: { id: string; }
}
export default async function JobPage({ params }: JobPageProps) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['job', params.id],
    queryFn: () => fetchJob({ id: params.id })
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Heading as="h1">Edit Job</Heading>
      <EditJobForm
        id={params.id}
        className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
      />
    </HydrationBoundary>
  )
}
