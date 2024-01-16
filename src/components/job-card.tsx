import { Job } from '@/types';

type JobCardProps = {
  job: Job;
}

export const JobCard = ({ job }: JobCardProps) => (
  <p>{job.position}</p>
)
