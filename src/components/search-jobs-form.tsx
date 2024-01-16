'use client';

import { FormEvent } from 'react';
import {
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { SubmitButton } from '@/components';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  JobStatus,
  WithClassName,
} from '@/types';

export const SearchJobsForm = ({ className }: WithClassName) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const search = params.get('search') || '';
  const status = params.get('status') || '';

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get('search') as string;
    const status = formData.get('status') as string;
    console.log('search', search);
    console.log('status', status);

    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (status !== 'All') params.set('status', status);
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={className}
    >
      <Input
        type="text"
        placeholder="Search Jobs"
        name="search"
        defaultValue={search}
      />
      <Select
        name="status"
        defaultValue={status}
      >
        <SelectTrigger>
          <SelectValue placeholder={status || "All"} />
        </SelectTrigger>
        <SelectContent>
          {[['All', 'All'], ...Object.entries(JobStatus)].map(([value, label]) => (
            <SelectItem
              key={value}
              value={value}
            >{label}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <SubmitButton>Search</SubmitButton>
    </form>
  )
}
