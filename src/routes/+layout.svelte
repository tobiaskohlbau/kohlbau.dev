<script lang="ts">
  import "@fontsource-variable/roboto-flex";
  import '@fontsource/oxygen';
  import '@fontsource/fugaz-one';

  import '../index.css';

  import { page } from "$app/stores"

  function active(node: HTMLLinkElement) {
  console.log(node, $page.url.pathname, node.getAttribute('href'));
    if ($page.url.pathname === node.getAttribute('href')) {
      console.log("adding active class");
      node.classList.add('active');
    } else {
      console.log("removing active class");
      node.classList.remove('active');
    }
  }

  let routes = [
    {
      path: '/',
      title: 'Home'
    },
    {
      path: '/blog',
      title: 'Blog'
    }
  ];
</script>

<nav>
  <h3>
    kohlbau.dev
  </h3>
  <ul>
    {#each routes as {path, title}}
      <li>
        <a href={path} class="link" class:active={$page.url.pathname === path}>{title}</a>
      </li>
    {/each}
  </ul>
</nav>

<div class="header">
  <h2>
    {$page.data.title}
  </h2>
</div>

<main>
<slot />
</main>

<footer>
  <span>
  Copyright Tobias Kohlbau 2024
  </span>
  <span>|</span>
  <a href="/imprint">Imprint</a>
</footer>

<style>

nav {
  display: flex;
  background-color: var(--color-primary-a50);
  border-bottom: 1px solid var(--static1);
  justify-content: space-between;
  align-items: center;
}

nav > h3 {
  margin-left: 2rem;
  font-family: 'Fugaz One', sans-serif;
  color: var(--accent);
  text-decoration: underline;
}

ul {
  display: flex;
  list-style: none;  
  justify-content: end;
  align-items: center;
  gap: 0.5rem;
  padding: 0 6rem;
  font-family: var(--font-roboto);
  font-weight: 400;
  height: 3.25rem;

}

.header {
  height: 6rem;
  margin: 0 4rem;
  display: flex;
  align-items: center;
}

main {
  margin: 1rem 8rem;
}

footer {
  display: flex;
  gap: 0.25rem;
  justify-content: center;
}

a {
 text-decoration: none;   
 color: var(--text);
}

a:not(.active):hover {
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

a.active {
  border-bottom: 1px solid var(--accent);
}
</style>
