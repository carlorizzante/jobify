'use client';

import { useFormStatus } from 'react-dom';
import {
  Button,
  ButtonProps,
} from './ui/button';

type SubmitButtonProps = ButtonProps;

export const SubmitButton = ({ children, ...rest }: SubmitButtonProps) => {
  const { pending } = useFormStatus()
  return (
    <Button
      type="submit"
      disabled={pending}
      {...rest}
    >{children}</Button>
  )
}
