'use server';

import {
  FormState,
  Job,
  JobStatus,
  JobType,
} from '@/types';
import { parseError } from '@/utils';
import prisma from '@/utils/prisma';
import { Prisma } from '@prisma/client';
import { authenticate } from './utils/authenticate';

type FetchJobsProps = {
  search?: string | null;
  status?: JobStatus | 'All';
  mode?: JobType;
  page?: number;
  take?: number;
}

type ReturnType = FormState & {
  data: {
    jobs: Job[],
    count: number;
    page: number;
    totalPages: number;
  };
}

export const fetchJobs = async ({
  search,
  status,
  mode,
  page = 1,
  take = 10,
}: FetchJobsProps): Promise<ReturnType> => {
  try {
    const clerkId = authenticate();
    const where: Prisma.JobWhereInput = {};
    if (clerkId) where.clerkId = clerkId;
    if (status && status !== 'All') where.status = status;
    if (search) where.OR = [
      { position: { contains: search } },
      { company: { contains: search } },
      { location: { contains: search } },
    ];

    console.log('where', where);

    const jobs: Job[] = await prisma.job.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      // skip: take * (page - 1),
      // take: take,
    });

    // console.log('----');
    // console.log('jobs', jobs)
    // console.log('----');

    if (jobs) {
      return {
        success: true,
        message: '',
        error: null,
        data: {
          jobs: jobs,
          count: jobs.length,
          page: 1,
          totalPages: 0,
        },
      }

    } else {
      throw new Error('Failed to retrieve jobs from database.')
    }

  } catch (e) {
    return {
      success: false,
      message: parseError(e),
      error: parseError(e),
      data: {
        jobs: [],
        count: 0,
        page: 0,
        totalPages: 0,
      },
    }
  }

}
