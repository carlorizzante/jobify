import {
  CreateJobForm,
  Headline,
} from '@/components';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

export default async function AddJobsPage() {
  const queryClient = new QueryClient()
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Headline as="h1">Create Job</Headline>
      <CreateJobForm className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 items-start w-fill" />
    </HydrationBoundary>
  )
}
