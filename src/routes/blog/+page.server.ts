import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import fs from 'node:fs/promises';
import path from 'node:path';
import { blog_post_folder, readMarkdown } from '$lib/markdown';

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
	const listing = await fs.readdir(blog_post_folder);

	const posts = [];
	for (const file of listing.filter((fn) => fn.endsWith('.md'))) {
		const post = await readMarkdown(path.join(blog_post_folder, file));
		posts.push({
			...post,
			slug: file.substring(0, file.length - 3)
		});
	}

	return {
		title: 'Blog',
		posts
	};
};
