import {
  Prisma,
  PrismaClient,
} from '@prisma/client';

const prisma = new PrismaClient()

const jobData: Prisma.JobCreateInput[] = []

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
