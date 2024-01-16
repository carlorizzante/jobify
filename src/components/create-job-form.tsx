'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { createJob } from '@/actions';
import {
  FormInput,
  FormSelect,
  SubmitButton,
} from '@/components';
import { Form } from '@/components/ui/form';
import {
  createJobFormSchema,
  CreateJobFormSchema,
  JobStatus,
  JobType,
} from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  QueryClient,
  useMutation,
} from '@tanstack/react-query';
import { WithClassName } from '../types/types';
import { useToast } from './ui/use-toast';

type CreateJobFormProps = WithClassName;

export const CreateJobForm = ({ className }: CreateJobFormProps) => {
  const queryClient = new QueryClient();
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<CreateJobFormSchema>({
    resolver: zodResolver(createJobFormSchema),
    defaultValues: {
      company: '',
      location: '',
      position: '',
      status: JobStatus.Pending,
      type: JobType.FullTime,
    }
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: CreateJobFormSchema) => {
      const { success, message, error, data } = await createJob(values);
      if (success && message) {
        toast({
          title: 'Success!',
          description: 'Job added to your job list!',
        });
        queryClient.invalidateQueries({ queryKey: ['jobs'] });
        queryClient.invalidateQueries({ queryKey: ['stats'] });
        queryClient.invalidateQueries({ queryKey: ['charts'] });
        form.reset();
        router.push('/jobs');
      } else if (error) {
        toast({
          title: 'Error!',
          description: 'Failed to add job.',
        });
      }
    },
  });

  const handleSubmit = (values: CreateJobFormSchema) => {
    console.log('handleSubmit', values);

    mutate(values);
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
          label="Status"
          name="status"
          items={Object.entries(JobStatus)}
        />
        <FormSelect
          control={form.control}
          label="Type"
          name="type"
          items={[
            ['FullTime', 'Full-time'],
            ['PartTime', 'Part-time'],
            ['Internship', 'Internship'],
          ]}
        />
        <SubmitButton disabled={isPending} className="self-end uppercase">Create Job</SubmitButton>
      </form>
    </Form>
  )
}
