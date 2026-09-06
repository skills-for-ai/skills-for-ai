import { error } from '@sveltejs/kit';
import { categories } from '$lib/data/categories';
import { skills } from '$lib/data/skills';

export const prerender = true;

export function entries() {
	return categories.map((c) => ({ category: c.slug }));
}

export function load({ params }: { params: { category: string } }) {
	const category = categories.find((c) => c.slug === params.category);
	if (!category) error(404, 'Category not found');
	return {
		category,
		skills: skills.filter((s) => s.category === category.title)
	};
}
