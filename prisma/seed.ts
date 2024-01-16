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
  {
    clerkId: 'user_2b0DgMOC38wVGKQVx03xtSTMMhF',
    position: 'Scribbler',
    company: 'WeClean',
    location: 'Rome',
    type: JobType.Internship,
    status: JobStatus.Pending
  },
  {
    clerkId: 'user_2b0DgMOC38wVGKQVx03xtSTMMhF',
    position: 'Cook',
    company: 'WeCleanMore',
    location: 'Stockholm',
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
    position: 'Plumber',
    company: 'WeCleanNoMore',
    location: 'Barcelona',
    type: JobType.FullTime,
    status: JobStatus.Declined
  },
  {
    clerkId: 'user_2b0DgMOC38wVGKQVx03xtSTMMhF',
    position: 'Contruction Worker',
    company: 'WeWash',
    location: 'Amsterdam',
    type: JobType.FullTime,
    status: JobStatus.Declined
  },
  {
    clerkId: 'user_2b0DgMOC38wVGKQVx03xtSTMMhF',
    position: 'Jumper',
    company: 'WeMightDo',
    location: 'Sydney',
    type: JobType.PartTime,
    status: JobStatus.Interview
  },
  // 
  {
    clerkId: 'user_2b0DgMOC38wVGKQVx03xtSTMMhF',
    position: 'Programmer',
    company: 'WeClean',
    location: 'Valencia',
    type: JobType.Internship,
    status: JobStatus.Pending
  },
  {
    clerkId: 'user_2b0DgMOC38wVGKQVx03xtSTMMhF',
    position: 'Project Manager',
    company: 'WeCleanMore',
    location: 'Copenhagen',
    type: JobType.FullTime,
    status: JobStatus.Pending
  },
  {
    clerkId: 'user_2b0DgMOC38wVGKQVx03xtSTMMhF',
    position: 'Hair Dresser',
    company: 'WeCleanSome',
    location: 'Valby',
    type: JobType.PartTime,
    status: JobStatus.Interview
  },
  {
    clerkId: 'user_2b0DgMOC38wVGKQVx03xtSTMMhF',
    position: 'Lawyer',
    company: 'WeCleanNoMore',
    location: 'Leon',
    type: JobType.FullTime,
    status: JobStatus.Declined
  },
  {
    clerkId: 'user_2b0DgMOC38wVGKQVx03xtSTMMhF',
    position: 'Journalist',
    company: 'WeWash',
    location: 'Florence',
    type: JobType.FullTime,
    status: JobStatus.Declined
  },
  {
    clerkId: 'user_2b0DgMOC38wVGKQVx03xtSTMMhF',
    position: 'Chocolate Eater',
    company: 'WeMightDo',
    location: 'Detroit',
    type: JobType.PartTime,
    status: JobStatus.Interview
  },
  {
    clerkId: 'user_2b0DgMOC38wVGKQVx03xtSTMMhF',
    position: 'Stripper',
    company: 'WeClean',
    location: 'Las Vegas',
    type: JobType.Internship,
    status: JobStatus.Pending
  },
  {
    clerkId: 'user_2b0DgMOC38wVGKQVx03xtSTMMhF',
    position: 'Politician',
    company: 'WeCleanMore',
    location: 'Palermo',
    type: JobType.FullTime,
    status: JobStatus.Pending
  },
  {
    clerkId: 'user_2b0DgMOC38wVGKQVx03xtSTMMhF',
    position: 'Mafia Boss',
    company: 'WeCleanSome',
    location: 'Miami',
    type: JobType.PartTime,
    status: JobStatus.Interview
  },
  {
    clerkId: 'user_2b0DgMOC38wVGKQVx03xtSTMMhF',
    position: 'Plumber',
    company: 'WeCleanNoMore',
    location: 'Barcelona',
    type: JobType.FullTime,
    status: JobStatus.Declined
  },
  {
    clerkId: 'user_2b0DgMOC38wVGKQVx03xtSTMMhF',
    position: 'Fisher',
    company: 'WeWash',
    location: 'Porto',
    type: JobType.FullTime,
    status: JobStatus.Declined
  },
  {
    clerkId: 'user_2b0DgMOC38wVGKQVx03xtSTMMhF',
    position: 'Drinker',
    company: 'WeMightDo',
    location: 'Como',
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
