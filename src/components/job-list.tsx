'use client';

import { fetchJobs } from '@/actions';
import { useQuery } from '@tanstack/react-query';
import { JobCard } from '.';

export const JobList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['jobs'],
    queryFn: () => fetchJobs({})
  })

  console.log('data', data);

  if (!data) return;

  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3">
      {data.data.jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </ul>
  )

}
