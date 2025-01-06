import { defineCollection, z } from '@nuxt/content'

export const collections = {
  programma: defineCollection({
    type: 'page',
    source: 'programma/**/*.md',
    schema: z.object({
      title: z.string(),
      aliases: z.array(z.string()).optional(),
      semester: z.number(),
      studycredits: z.number(),
      weight: z.number(),
      tags: z.array(z.string()),
      pillar: z.string(),
      tracks: z.array(z.string()),
      tools: z.array(z.string()),
      hide: z.boolean().optional(),
      alternates: z.array(z.string()).optional(),
    }),
  }),
}
