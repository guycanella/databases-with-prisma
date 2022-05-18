import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
	const result = await prisma.courses.create({
		data: {
			name: 'Curso de ReactJS',
			duration: 500,
			description: 'Curso de React JS',
			teacher: {
				connectOrCreate: {
					where: {
						name: 'Guilherme Canella'
					},
					create: {
						name: 'Guilherme Canella'
					}
				}
			}
		}
	})

	console.log(result)
}

main()
