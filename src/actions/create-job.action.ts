'use server';

import {
  createJobFormSchema,
  CreateJobFormSchema,
  FormState,
  JobType,
} from '@/types';
import { parseError } from '@/utils';
import prisma from '@/utils/prisma';
import { authenticate } from './utils/authenticate';

type ReturnTyoe = FormState & { data: JobType | null; }

export const createJob = async (values: CreateJobFormSchema): Promise<FormState & { data: JobType | null; }> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  try {
    const clerkId = authenticate();
    createJobFormSchema.parse(values);
    const job: JobType = await prisma.job.create({
      data: { ...values, clerkId }
    });

    if (job) {
      return {
        success: true,
        message: 'Job successfully created.',
        error: null,
        data: job,
      }
    } else {
      throw new Error('Failed to create job.')
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
