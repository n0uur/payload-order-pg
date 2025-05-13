import { getPayload } from 'payload'
import config from './payload.config'
;(async () => {
  const payload = await getPayload({
    config,
  })

  const somethings = await payload.find({
    collection: 'somethings',
    limit: 1000,
    select: {
      _order: true,
    },
    sort: '_order',
  })

  console.log(somethings.docs.map((doc) => doc._order))
  process.exit(0)
})()
