import {
  CreateJobForm,
  Headline,
} from '@/components';

export default async function AddJobsPage() {
  return (
    <>
      <Headline as="h1">Create Job</Headline>
      <CreateJobForm className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 items-start w-fill" />
    </>
  )
}
