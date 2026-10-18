import { getCollection } from 'astro:content';
import { getDocCategory } from '@/data/docs';

const plain = (markdown: string) =>
  markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/^#{1,6}\s+(.+)$/gm, '$1.')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`|]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

export async function GET() {
  const entries = await getCollection('docs');
  const index = entries.map((entry) => ({
    url: `/docs/${entry.id}/`,
    title: entry.data.title,
    description: entry.data.description,
    category: getDocCategory(entry.data.category)?.title ?? '',
    headings: [...(entry.body ?? '').matchAll(/^#{2,3}\s+(.+)$/gm)].map((match) => match[1].trim()),
    text: plain(entry.body ?? '')
  }));
  return new Response(JSON.stringify(index), { headers: { 'Content-Type': 'application/json' } });
}
