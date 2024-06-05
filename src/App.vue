<script setup>
import { RouterLink, RouterView } from 'vue-router'
import WelcomeView from './components/HomeView/WelcomeView.vue'

</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink :to="{name: 'RepoView'}">Repo</RouterLink>
        <!-- <RouterLink :to="{name: 'ErrorView'}">Error</RouterLink> -->
       
      </nav>
      <WelcomeView msg="Welcome to my Github Repositories" />
    </div>

    <img
      width="200px"
      height="200px"
      overflow="hidden"
      src="https://avatars.githubusercontent.com/u/31227288?v=4"
      alt="avatar-image"
      class="logo"
    />
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  margin-top: 4rem;
  border: 3px solid #00bd7e;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(34, 157, 15, 0.3);
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
  border-radius: 5px;
  padding: 0.5rem 1rem;
  border: 1px solid #00bd7e;
  background-color: #00bd7e;
}

nav a:hover{
  color: var(--color-text);
  border-radius: 5px;
  padding: 0.5rem 1rem;
  border: 1px solid #00bd7e;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: column;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
    margin-top: 4rem;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: center;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
