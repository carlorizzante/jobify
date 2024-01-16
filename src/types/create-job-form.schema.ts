import * as z from 'zod';

export type Job = {
  clerkId: string;
  company: string;
  createdAt: Date;
  id: string;
  location: string;
  type: string;
  position: string;
  status: string;
  updatedAt: Date;
}

export enum JobStatus {
  Declined = 'Declined',
  Interview = 'Interview',
  Pending = 'Pending',
}

export enum JobType {
  FullTime = 'FullTime',
  Internship = 'Internship',
  PartTime = 'PartTime',
}

export const createJobFormSchema = z.object({
  position: z.string().min(2, {
    message: 'Position must be at least 2 characters'
  }),
  company: z.string().min(2, {
    message: 'Company must be at least 2 characters',
  }),
  location: z.string().min(2, {
    message: 'Location must be at least 2 characters'
  }),
  status: z.nativeEnum(JobStatus),
  type: z.nativeEnum(JobType),
});

export type CreateJobFormSchema = z.infer<typeof createJobFormSchema>;
