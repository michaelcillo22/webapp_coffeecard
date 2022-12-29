import prisma from '../../../../lib/prisma'

export default async function handler(req, res) {
  const allCustomer = await prisma.customer.findMany()
  res.status(200).json(allCustomer)
}
