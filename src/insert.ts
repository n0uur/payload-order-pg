import { getPayload } from 'payload'
import config from './payload.config'
;(async () => {
  const payload = await getPayload({
    config,
  })

  for (let i = 0; i < 1000; i++) {
    await payload.create({
      collection: 'somethings',
      data: {
        title: `Hello World ${i}`,
        description: `This is a test ${i}`,
      },
    })
  }

  process.exit(0)
})()
