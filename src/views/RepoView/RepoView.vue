<script setup>
import { onMounted, ref, computed } from 'vue'
import api from '../../composables/api'
import Loading from '@/assets/Loading_icon.gif'

const github = ref(null)
const page = ref(1)
const perPage = 3
const searchQuery = ref('')
const loadRepos = () => {
  console.log('Component mounted')
  api
    .getUserRepos('kaylezy', page.value, perPage)
    .then((response) => {
      console.log('User:', response.data)
      github.value = response.data
    })
    .catch((error) => {
      console.error('Error fetching repos', error)
    })
}
onMounted(loadRepos)
const nextPage = () => {
  page.value++
  loadRepos()
}
const prevPage = () => {
  if (page.value > 1) {
    page.value--
    loadRepos()
  }
}
const filteredRepos = computed(() => {
  if (!github.value) return []
  if (!searchQuery.value) return github.value
  const query = searchQuery.value.toLowerCase()
  return github.value.filter((repo) => repo.name.toLowerCase().includes(query))
})
</script>
<template>
  <section>
    <div class="wrapper">
      <h1>Kaylezy Github Repositories</h1>
      <h3>Here are list of my repositories:</h3>
      <div v-if="github === null" class="loading">
        <img src="@/assets/Loading_icon.gif" alt="loading..." />
      </div>
      <div v-if="github" class="github">
        <input type="text" placeholder="Search repository" v-model="searchQuery" />
        <div class="home" v-for="repo in filteredRepos" :key="repo.id">
          <RouterLink
            :to="{ name: 'SingleRepoView', params: { id: repo.name, name: repo.owner.login } }"
            class="p"
            >{{ repo.name }}
            <p class="">language: {{ repo.language }}</p>
            <p class="mt-2">Date & Time: {{ repo.created_at }}</p>
          </RouterLink>
        </div>
        <div class="button">
          <button @click="prevPage" :disabled="page === 1">Previous</button>
          <button @click="nextPage">Next</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.wrapper {
  margin: 0 auto;
  padding: 10px;
  color: #00bd7e;
}

.home {
  list-style: none;
  padding: 10px;
  border: 1px solid #00bd7e;
  border-radius: 10px;
  margin: 20px 0;
  font-size: 1.5rem;
}

.home:hover,
.p:hover,
p:hover {
  color: #dcdcdc;
}

.home:hover {
  background: #00bd7e;
  color: #dcdcdc;
  border: none;
}

input {
  border: 1px solid #00bd7e;
  border-radius: 5px;
  padding: 8px;
  margin: 10px 0;
  background: transparent;
  color: #00bd7e;
  width: 50%;
}

.loading {
  margin: 0 auto;
  margin-top: 20px;
  padding: 10px;
  width: 50%;
}

.button {
  display: flex;
  justify-content: center;
  align-content: space-between;
  margin: 0 auto;
}

button {
  align-content: space-between;
  background: #00bd7e;
  color: #dcdcdc;
  margin: 0 auto;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100px;
}

button:hover {
  background: transparent;
  color: #00bd7e;
  border: 1px solid #00bd7e;
}
</style>
