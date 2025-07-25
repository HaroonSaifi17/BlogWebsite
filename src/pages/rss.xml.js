import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
  const posts = await getCollection('blog')
  return rss({
    title: "Haroon's Dev Blog",
    description:
      'Latest posts on web development, full-stack projects, and modern tech insights by Mohd Haroon.',
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.id}/`,
    })),
  })
}
