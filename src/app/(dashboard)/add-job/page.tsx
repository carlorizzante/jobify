import {
  CreateJobForm,
  Heading,
} from '@/components';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

export default async function AddJobsPage() {
  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Heading as="h1">Create Job</Heading>
      <CreateJobForm
        className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
      />
    </HydrationBoundary>
  )
}
