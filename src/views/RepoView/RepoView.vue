<script setup>
import { ref, onMounted, computed } from 'vue'
import { RouterLink } from 'vue-router'

const repos = ref([])
const isLoading = ref(false)
const error = ref(null)

onMounted(() => {
  isLoading.value = true
  fetch('https://api.github.com/users/kaylezy/repos')
    .then((res) => {
      if (!res.ok) {
        throw new Error('Failed to fetch repositories')
      }
      return res.json()
    })
    .then((data) => {
      console.log(data)
      repos.value = data
    })
    .catch((err) => {
      error.value = err.message
    })
    .finally(() => {
      isLoading.value = false
    })
})
//Ref for search bar
const search = ref('')
const filteredRepos = computed(() => {
  if (search.value) {
    return repos.value.filter((repo) => repo.name.includes(search.value))
  } else if (search.value === '') {
    return repos.value
  } else {
    return 'no repos found'
  }
})
</script>

<template>
  <div class="wrapper">
    <div class="">
      <h1>Kaylezy Github Repositories</h1>
      <p>Here are lists of my repositories:</p>
    </div>
    <div class="search">
      <input
        v-model="search"
        type="text"
        placeholder="Search repositories..."
        class="my-4 mx-32 border-2 rounded-md focus:outline-none border-green-300 p-2 w-[50%]"
      />
    </div>
    <div class="home" v-for="repo in filteredRepos" :key="repo.id">
      <RouterLink
        :to="{ name: 'SingleRepoView', params: { id: repo.name, name: repo.owner.login } }"
        class="p"
        >{{ repo.name }}
        <p class="">language: {{ repo.language }}</p>
        <p class="mt-2">Date & Time: {{ repo.created_at }}</p>
      </RouterLink>
    </div>
  </div>
</template>

<style>
.wrapper {
  margin: 0 auto;
  padding: 20px;
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
</style>
