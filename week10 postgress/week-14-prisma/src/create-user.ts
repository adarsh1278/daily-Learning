import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // Use await to wait for the promise to resolve
    const response = await prisma.user.create({
        data: {
            email: "adars@kiet.edu",
            name: "Adarsh"
        }
    })
    console.log("response is", response)
}

main()
  .then(async () => {
    console.log("done with query")
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
