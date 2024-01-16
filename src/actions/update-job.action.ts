'use server';

import {
  createJobFormSchema,
  CreateJobFormSchema,
  FormState,
  Job,
  WithId,
} from '@/types';
import { parseError } from '@/utils';
import prisma from '@/utils/prisma';
import { authenticate } from './utils/authenticate';

type UpdateJobProps = WithId & {
  values: CreateJobFormSchema;
}

type ReturnTyoe = FormState & { data: Job | null; }

export const updateJob = async ({ id, values }: UpdateJobProps): Promise<ReturnTyoe> => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  try {
    const clerkId = authenticate();
    createJobFormSchema.parse(values);
    const job: Job = await prisma.job.update({
      where: { id, clerkId },
      data: values
    });

    if (job) {
      return {
        success: true,
        message: 'Job successfully updated.',
        error: null,
        data: job,
      }
    } else {
      throw new Error('Failed to update job.')
    }

  } catch (e) {
    return {
      success: false,
      message: parseError(e),
      error: parseError(e),
      data: null,
    }
  }
}
