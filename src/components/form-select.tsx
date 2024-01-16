'use client';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

type FormSelectProps = {
  control: any;
  defaultValue?: string;
  description?: string;
  items: [string, string][];
  label?: string;
  name: string;
  placeholder?: string;
}
export const FormSelect = ({
  control,
  defaultValue,
  description,
  items = [],
  label,
  name,
  placeholder,
}: FormSelectProps) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        {label && <FormLabel>{label}</FormLabel>}
        <Select
          onValueChange={field.onChange}
          defaultValue={defaultValue || field.value}
        >
          <FormControl className="bg-muted">
            <SelectTrigger>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            {items.map(([value, label]) => (
              <SelectItem
                key={value}
                value={value}
              >{label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {description && <FormDescription>{description}</FormDescription>}
        <FormMessage />
      </FormItem>
    )}
  />
)
