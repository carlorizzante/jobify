'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { fetchJob } from '@/actions';
import { updateJob } from '@/actions/update-job.action';
import {
  FormInput,
  FormSelect,
  SubmitButton,
} from '@/components';
import { Form } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import {
  IJobSchema,
  JobSchema,
  JobStatus,
  JobType,
  WithClassName,
  WithId,
} from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

type EditJobFormProps = WithClassName & WithId;

export const EditJobForm = ({ className, id }: EditJobFormProps) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { toast } = useToast();

  const { data } = useQuery({
    queryKey: ['job', id],
    queryFn: () => fetchJob({ id })
  })

  const job = data?.data

  const form = useForm<IJobSchema>({
    resolver: zodResolver(JobSchema),
    defaultValues: {
      company: job?.company,
      location: job?.location,
      position: job?.position,
      status: (job?.status || JobStatus.Pending) as JobStatus,
      type: (job?.type || JobType.FullTime) as JobType,
    }
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: IJobSchema) => {
      const { success, message, error, data } = await updateJob({ id, values });
      if (success && message) {
        toast({
          title: 'Success!',
          description: message,
        });
        queryClient.invalidateQueries({ queryKey: ['jobs'] });
        queryClient.invalidateQueries({ queryKey: ['job', id] });
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
        <SubmitButton disabled={isPending} className="self-end uppercase">Save Job</SubmitButton>
      </form>
    </Form>
  )
}
