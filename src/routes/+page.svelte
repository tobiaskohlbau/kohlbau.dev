<script lang="ts">
</script>

<div class="card">
  <p>Welcome on my page, I'm Tobias Kohlbau a software developer with a passion for electronics and tinkering.</p>
  <enhanced:img src="./profile.jpg" alt="Tobias Kohlbau" class="profile" />

  <section class="social">
    <h4>Socials</h4>
    <div class="socials">
    <span>GitHub</span> <a href="https://github.com/tobiaskohlbau" target="_blank">tobiaskohlbau</a>
    <span>Twitter</span> <a href="https://twitter.com/tobiaskohlbau" target="_blank">@tobiaskohlbau</a>
    <span>LinkedIn</span> <a href="https://linkedin.com/in/tobiaskohlbau" target="_blank">tobiaskohlbau</a>
    </div>
  </section>
</div>

<style>
p {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

h4 {
  margin-bottom: 1rem;
}

.profile {
  border-radius: 2rem;
  border: 0.125rem solid var(--secondary);
  box-shadow: var(--shadow-elevation-medium);
  width: 300px;
  height: auto;
}

.social {
  margin-top: 2rem;
}

.socials {
  width: 16rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.25rem;
  align-items: center;
  justify-items: start;
  background-color: var(--static1);
  border-radius: 0.5rem;
  padding: 1rem;
}

.socials span {
    font-weight: 600;
    font-family: var(--font-roboto);
}

.socials a {
  color: var(--static6);
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
}

.socials a:hover {
 color: var(--accent);
}
</style>
