<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const text_length = 300;
</script>

<ul>
	{#each data.posts as post}
		<li>
			<a href="/blog/{post.slug}">
				<h3>{post.content.attributes.title}</h3>
				<p>
					{post.content.body.substring(0, text_length)}
					{#if post.content.body.length > text_length }
						...
					{/if}
				</p>
			</a>
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
	}

	ul li h3 + p {
		margin-top: 1rem;
	}

	a {
		color: var(--text);
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
