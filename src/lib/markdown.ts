import fs from 'node:fs/promises';
import fm from 'front-matter';
import * as marked from 'marked';

export const blog_post_folder = 'data/posts';

export async function readMarkdown(filename: string) {
	const data = await fs.readFile(filename, { encoding: 'utf8' });
	var content = fm(data);
	const markdown = await marked.parse(content.body);
	return {
		content,
		rendered: markdown
	};
}
