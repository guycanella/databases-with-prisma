import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
	const result = await prisma.courses.create({
		data: {
			name: 'Curso de React Native ',
			duration: 300,
			description: 'Curso Excelente de React Native',
			teacher: {
				connect: {
					id: 'b952d0e0-608f-482b-9495-002dbd2fcef0'
				}
			}
		}
	})

	console.log(result)
}

main()
