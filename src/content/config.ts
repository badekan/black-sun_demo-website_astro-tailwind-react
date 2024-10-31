// See documentation here:
// https://docs.astro.build/en/guides/content-collections/

// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const articleCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: ({ image }) => z.object({
    cover: image().refine((img) => img.width >= 357, {
      message: "Cover image must be at least 357 pixels wide!",
    }),
    cover2x: image().refine((img) => img.width >= 714, {
      message: "Cover image must be at least 714 pixels wide!",
    }),
    coverAlt: z.string(),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'article': articleCollection,
};