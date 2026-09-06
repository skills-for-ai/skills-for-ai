import { error } from '@sveltejs/kit';
import { skills } from '$lib/data/skills';
import { categories } from '$lib/data/categories';

export const prerender = true;

export function entries() {
	return skills.map((s) => ({ skill: s.slug }));
}

export function load({ params }: { params: { skill: string } }) {
	const skill = skills.find((s) => s.slug === params.skill);
	if (!skill) error(404, 'Skill not found');
	const category = categories.find((c) => c.title === skill.category);
	return { skill, category };
}
