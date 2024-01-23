import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const jobs = await prisma.job.create({
        data: {
          company: 'Google',
          position: 'Software Engineer',
          role: 'front end',
          location: 'Seattle, WA',
          languages: 'JS, HTML, CSS, Python'
        },
      })
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