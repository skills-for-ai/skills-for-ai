import { skills } from '$lib/data/skills';
import { categories } from '$lib/data/categories';
import { SITE_URL } from '$lib/site';

export const prerender = true;

export function GET() {
	const staticPaths = ['/', '/about/', '/categories/'];
	const categoryPaths = categories.map((c) => `/categories/${c.slug}/`);
	const skillPaths = skills.map((s) => `/skills/${s.slug}/`);
	const paths = [...staticPaths, ...categoryPaths, ...skillPaths];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `\t<url><loc>${SITE_URL}${p}</loc></url>`).join('\n')}
</urlset>
`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml' }
	});
}
