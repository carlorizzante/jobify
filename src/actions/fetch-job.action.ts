'use server';

import {
  FormState,
  Job,
  WithId,
} from '@/types';
import { parseError } from '@/utils';
import prisma from '@/utils/prisma';
import { authenticate } from './utils/authenticate';

type ReturnType = FormState & {
  data: Job | null;
}

export const fetchJob = async ({ id }: WithId): Promise<ReturnType> => {
  try {
    const clerkId = authenticate();
    const job = await prisma.job.findUnique({
      where: { id, clerkId },
    });

    if (job) {
      return {
        success: true,
        message: 'Job fetched successfully.',
        error: null,
        data: job,
      }
    } else {
      throw new Error('Failed to retrieve job.');
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
