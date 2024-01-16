'use client';

import { useSearchParams } from 'next/navigation';
import { fetchJobs } from '@/actions';
import { JobCard } from '@/components';
import {
  JobStatus,
  WithClassName,
} from '@/types';
import { useQuery } from '@tanstack/react-query';

export const JobList = ({ className }: WithClassName) => {
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
      <ul className={className}>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </ul>
    </>
  )

}
