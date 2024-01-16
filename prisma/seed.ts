import { PrismaClient } from '@prisma/client';
import { seedData } from './seed-data'; // https://www.mockaroo.com/

const prisma = new PrismaClient();

const clerkId = process.env.CLERK_ID || '';

async function main() {
  console.log(`Start seeding ...`)
  for (const data of seedData) {
    const { id } = await prisma.job.create({ data: { ...data, clerkId } });
    console.log(`Created entry with id: ${id}`);
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
