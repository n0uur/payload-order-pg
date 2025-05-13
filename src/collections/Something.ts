import type { CollectionConfig } from 'payload'

export const Something: CollectionConfig = {
  slug: 'somethings',
  admin: {
    useAsTitle: 'title',
  },
  orderable: true,
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'description',
      type: 'text',
    },
  ],
}
