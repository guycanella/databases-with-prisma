import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
	const result = await prisma.courses.update({
		where: {
			id: '5dff754b-33c7-4263-9b15-df09c421d382'
		},
		data: {
			duration: 300
		}
	})

	console.log(result)
}

main()