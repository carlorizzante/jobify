'use client';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

type FormInputProps = {
  control: any;
  description?: string;
  label?: string;
  name: string;
  placeholder?: string;
}

export const FormInput = ({
  control,
  description,
  label,
  name,
  placeholder,
}: FormInputProps) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        {label && <FormLabel>{label}</FormLabel>}
        <FormControl>
          <Input
            placeholder={placeholder}
            className="bg-muted"
            {...field}
          />
        </FormControl>
        {description && <FormDescription>{description}</FormDescription>}
        <FormMessage />
      </FormItem>
    )}
  />
)
