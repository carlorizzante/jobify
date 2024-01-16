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
  IJobSchema,
  JobSchema,
  JobStatus,
  JobType,
} from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { WithClassName } from '../types/types';
import { useToast } from './ui/use-toast';

type CreateJobFormProps = WithClassName;

export const CreateJobForm = ({ className }: CreateJobFormProps) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<IJobSchema>({
    resolver: zodResolver(JobSchema),
    defaultValues: {
      company: '',
      location: '',
      position: '',
      status: JobStatus.Pending,
      type: JobType.FullTime,
    }
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: IJobSchema) => {
      const { success, message, error, data } = await createJob(values);
      if (success && message) {
        toast({
          title: 'Success!',
          description: message,
        });
        queryClient.invalidateQueries({ queryKey: ['jobs'] });
        queryClient.invalidateQueries({ queryKey: ['stats'] });
        queryClient.invalidateQueries({ queryKey: ['charts'] });
        form.reset();
        router.push('/jobs');
      } else if (error) {
        toast({
          title: 'Error!',
          description: error,
        });
      }
    },
  });

  const handleSubmit = (values: IJobSchema) => {
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
          items={Object.values(JobStatus).map((value) => [value, value])}
        />
        <FormSelect
          control={form.control}
          label="Type"
          name="type"
          items={[
            ['full-time', 'full-time'],
            ['part-time', 'part-time'],
            ['internship', 'internship'],
          ]}
        />
        <SubmitButton disabled={isPending} className="self-end uppercase">Create Job</SubmitButton>
      </form>
    </Form>
  )
}
