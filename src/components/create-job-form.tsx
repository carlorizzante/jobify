'use client';

import { useForm } from 'react-hook-form';
import {
  FormInput,
  FormSelect,
} from '@/components';
import { Form } from '@/components/ui/form';
import {
  createJobFormSchema,
  CreateJobFormSchema,
  JobMode,
  JobStatus,
} from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { WithClassName } from '../types/types';
import { Button } from './ui/button';

type CreateJobFormProps = WithClassName;

export const CreateJobForm = ({ className }: CreateJobFormProps) => {
  const form = useForm<CreateJobFormSchema>({
    resolver: zodResolver(createJobFormSchema),
    defaultValues: {
      company: '',
      location: '',
      position: '',
      status: JobStatus.Pending,
      mode: JobMode.FullTime,
    }
  });

  const handleSubmit = (values: CreateJobFormSchema) => {
    console.log('handleSubmit', values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className={className}>
        <FormInput
          control={form.control}
          label="Position"
          name="position"
        />
        <FormInput
          control={form.control}
          label="Company"
          name="company"
        />
        <FormInput
          control={form.control}
          label="Location"
          name="location"
        />
        <FormSelect
          control={form.control}
          label="Job Status"
          name="status"
          items={Object.entries(JobStatus)}
        />
        <FormSelect
          control={form.control}
          label="Job Mode"
          name="mode"
          items={[
            ['FullTime', 'Full-time'],
            ['PartTime', 'Part-time'],
            ['Internship', 'Internship'],
          ]}
        />
        <Button type="submit" className="self-end uppercase">Create Job</Button>
      </form>
    </Form>
  )
}
