import {
  Prisma,
  PrismaClient,
} from '@prisma/client';
import {
  JobStatus,
  JobType,
} from '../src/types';

const prisma = new PrismaClient()

const jobData: Prisma.JobCreateInput[] = [
  {
    clerkId: 'user_2b0DgMOC38wVGKQVx03xtSTMMhF',
    position: 'Janitor',
    company: 'WeClean',
    location: 'Berlin',
    type: JobType.Internship,
    status: JobStatus.Pending
  },
  {
    clerkId: 'user_2b0DgMOC38wVGKQVx03xtSTMMhF',
    position: 'Window cleaner',
    company: 'WeCleanMore',
    location: 'Amsterdam',
    type: JobType.FullTime,
    status: JobStatus.Pending
  },
  {
    clerkId: 'user_2b0DgMOC38wVGKQVx03xtSTMMhF',
    position: 'Polisher',
    company: 'WeCleanSome',
    location: 'Copenhagen',
    type: JobType.PartTime,
    status: JobStatus.Interview
  },
  {
    clerkId: 'user_2b0DgMOC38wVGKQVx03xtSTMMhF',
    position: 'Stuffer',
    company: 'WeCleanNoMore',
    location: 'Paris',
    type: JobType.FullTime,
    status: JobStatus.Declined
  },
  {
    clerkId: 'user_2b0DgMOC38wVGKQVx03xtSTMMhF',
    position: 'Washer',
    company: 'WeWash',
    location: 'Madrid',
    type: JobType.FullTime,
    status: JobStatus.Declined
  },
  {
    clerkId: 'user_2b0DgMOC38wVGKQVx03xtSTMMhF',
    position: 'Swimmer',
    company: 'WeMightDo',
    location: 'Barcelona',
    type: JobType.PartTime,
    status: JobStatus.Interview
  },
];

async function main() {
  console.log(`Start seeding ...`)
  for (const j of jobData) {
    const job = await prisma.job.create({
      data: j,
    })
    console.log(`Created tour with id: ${job.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
