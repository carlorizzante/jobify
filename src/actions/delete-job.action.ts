'use server';

import {
  FormState,
  Job,
} from '@/types';
import { parseError } from '@/utils';
import prisma from '@/utils/prisma';
import { authenticate } from './utils/authenticate';

export const deleteJob = async (id: string): Promise<FormState> => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const clerkId = authenticate();
  try {
    const job: Job = await prisma.job.delete({
      where: { id, clerkId }
    });

    if (job) {
      return {
        success: true,
        message: 'Job successfully deleted.',
        error: null,
      }
    } else {
      throw new Error('Unable to delete job.');
    }
  } catch (e) {
    return {
      success: false,
      message: parseError(e),
      error: parseError(e)
    }
  }
}
