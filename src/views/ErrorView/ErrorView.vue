<script setup>
import Eror from '@/assets/eror.png'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div className="error">
    <div className="error-cont error-cont-div">
      <p>Oopss!....404 Error: Page Not Found</p>
      <div class="error-img">
        <img src="@/assets/eror.png" alt="error-image" />
      </div>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>Click the button below to go back to the home page.</p>

      <div class="btn-back">
        <router-link class="btn-back" :to="{ name: 'RepoView' }">Home</router-link>
      </div>
    </div>
  </div>
</template>

<style>
.error {
  color: red;
  margin-top: 50px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
}

.error-img img {
  display: flex;
  margin: 0 auto;
  width: 60%;
  height: 60%;
  padding: 20px;
}
</style>
