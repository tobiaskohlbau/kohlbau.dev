import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
	return {
		title: 'Imprint'
	};
};
