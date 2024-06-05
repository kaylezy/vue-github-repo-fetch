<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const repo = ref({})
const error = ref(null)

onMounted(async () => {
  try {
    const response = await fetch(`https://api.github.com/repos/kaylezy/${route.params.id}`)
    if (!response.ok) {
      throw new Error('Oops! Error 404. Something went wrong. Please try again later.')
    }
    repo.value = await response.json()
  } catch (err) {
    error.value = err.message
  }
})
</script>

<template>
  <div class="wrapper">
    <div v-if="error">
      <p>{{ error }}</p>
    </div>
    <div class="repo-details">
      <h3>Repo Details:</h3>
    </div>
    <div v-if="repo">
      <p>Repo Name: {{ repo.name }}</p>
      <p>Repo Full_Name: {{ repo.full_name }}</p>
      <p>Node ID: {{ repo.node_id }}</p>
      <p>Visibility: {{ repo.visibility }}</p>
      <p>Forks: {{ repo.forks }}</p>
      <p>Subscribers: {{ repo.subscribers_count }}</p>
      <p>Size: {{ repo.size }}</p>
      <p>
        GitHub Link:
        <a
          target="_blank"
          :href="repo.html_url"
          class="p-4 hover:text-green-400 hover:font-medium"
          >{{ repo.html_url }}</a
        >
      </p>

      <p className="date">Created: {{ repo.created_at }}</p>
    </div>
    <div class="btn-back">
      <router-link class="btn-back" :to="{ name: 'RepoView' }">Back to repos</router-link>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 10px;
  border: 1px solid #00bd7e;
  border-radius: 10px;
  color: var(--color-text);
}

p {
  font-size: 1.5rem;
}

.repo-details {
  margin: 10px;
  border-bottom:#00bd7e 1px solid;
  width: 100%;
}

.repo-details h3 {
  color: #00bd7e;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 10px;
}

.btn-back {
  padding: 10px;
  background-color: #00bd7e;
  color: white;
  border-radius: 5px;
  margin-top: 20px;
}

@media screen and (max-width: 768px){
  .wrapper {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 10px;
  border: 1px solid #00bd7e;
  border-radius: 10px;
  color: var(--color-text);
}
}
</style>
