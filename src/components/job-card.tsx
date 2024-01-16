import {
  Briefcase,
  CalendarDays,
  MapPin,
  RadioTower,
} from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Job,
  WithChildren,
  WithClassName,
} from '@/types';
import { formatDate } from '@/utils';
import { DeleteJobForm } from '.';

type JobCardProps = {
  job: Job;
}

export const JobCard = ({ job }: JobCardProps) => (
  <Card className="bg-muted">
    <CardHeader>
      <CardTitle>{job.position}</CardTitle>
      <CardDescription>{job.company}</CardDescription>
    </CardHeader>
    <Separator className="mb-6" />
    <CardContent className="grid grid-cols-2 gap-4">
      <JobInfo><Briefcase /><span>{job.type}</span></JobInfo>
      <JobInfo><MapPin /><span>{job.location}</span></JobInfo>
      <JobInfo><CalendarDays /><span>{formatDate(job.createdAt)}</span></JobInfo>
      <Badge className="w-28 justify-center text-white uppercase">
        <JobInfo className="justify-center "><RadioTower className="w-4 h-4" /><span>{job.status}</span></JobInfo>
      </Badge>
    </CardContent>
    <CardFooter className="flex gap-4">
      <Button asChild size="sm" className="text-white uppercase">
        <Link href={`/jobs/${job.id}`}>Edit</Link>
      </Button>
      <DeleteJobForm id={job.id} />
    </CardFooter>
  </Card>
)

const JobInfo = ({ children, className }: WithChildren & WithClassName) => (
  <div className={`flex gap-2 items-center ${className}`}>
    {children}
  </div>
)
