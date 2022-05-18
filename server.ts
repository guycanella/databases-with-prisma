import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
	const result = await prisma.courses.create({
		data: {
			duration: 200,
			name: 'Curso de NodeJS',
			description: 'Excelente curso de NodeJS'
		}
	})

	console.log(result)
}

main()