import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { blog_post_folder, readMarkdown } from '$lib/markdown';

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
	const markdown = await readMarkdown(`${blog_post_folder}/${params.slug}.md`);

	if (markdown) {
		return {
			title: markdown.content.attributes.title,
			markdown: markdown.rendered
		};
	}

	error(404, 'Not found');
};
