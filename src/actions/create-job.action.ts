'use server';

import {
  FormState,
  IJobSchema,
  Job,
  JobSchema,
} from '@/types';
import { parseError } from '@/utils';
import prisma from '@/utils/prisma';
import { authenticate } from './utils/authenticate';

type ReturnTyoe = FormState & { data: Job | null; }

export const createJob = async (values: IJobSchema): Promise<ReturnTyoe> => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  try {
    const clerkId = authenticate();
    JobSchema.parse(values);
    const job: Job = await prisma.job.create({
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
