import prisma from '../../../../lib/prisma'

export default async function handler(req, res) {
  if (req.method == 'GET') {
    const allUsers = await prisma.user.findMany({
      include: { customer: true, membership: true },
    })
    res.status(200).json(allUsers)
  } else if (req.method == 'POST') {
    const { email, password, is_shop } = req.body
    const result = await prisma.user.create({
      data: {
        email,
        password,
        is_shop,
      },
    })
    return res.json(result)
  }
}
