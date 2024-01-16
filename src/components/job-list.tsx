'use client';

import { useSearchParams } from 'next/navigation';
import { fetchJobs } from '@/actions';
import { JobStatus } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { JobCard } from '.';

export const JobList = () => {
  const params = useSearchParams();
  const search = params.get('search');
  const status = (params.get('status') || 'All') as JobStatus;
  const page = Number(params.get('page')) || 1;

  const { isPending, error, data } = useQuery({
    queryKey: ['jobs', search, status, page],
    queryFn: () => fetchJobs({ search, status, page })
  })

  const jobs = data?.data.jobs || [];

  return (
    <>
      {isPending && <p>Loading, please wait...</p>}
      {!jobs.length && <p>No jobs found</p>}
      <ul className="grid md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </ul>
    </>
  )

}
