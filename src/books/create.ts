import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
	const result = await prisma.books.create({
		data: {
			name: 'Arquitetura limpa',
			author_id: 'c808098d-9240-4a7d-823f-f7c5b779a3d2'
		}
	})

	console.log(result)
}

main()