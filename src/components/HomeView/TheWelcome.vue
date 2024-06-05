<script setup>
import WelcomeItem from './WelcomeItem.vue'
</script>

<template>
  <div class="card">
    <WelcomeItem>
      <template #heading>
        <h1>User Profile</h1>
      </template>

      <h2>Name: Olakunle Hassan</h2>

      <h2>Stack: Software Engineer</h2>

      <h2>Username: @kaylezy</h2>

      <h2>Skills: HTML, CSS, JavaScript, Vue.js, React.js, Github</h2>

      <h2>Twitter: @iam_kaylezy</h2>
    </WelcomeItem>
  </div>
</template>

<style scoped>
.card {
  margin-top: 8rem;
}

h1 {
  color: hsla(160, 100%, 37%, 1);
}

@media (max-width: 1024px) {
  .card {
    margin-top: 2rem;
  }
}
</style>
