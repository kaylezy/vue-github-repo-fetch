<template>
  <div>

    <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
    <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const data = ref([])

    const itemsPerPage = 3
    const currentPage = ref(1)

    const totalPages = computed(() => Math.ceil(data.value.length / itemsPerPage))

    const paginatedData = computed(() => {
      const startIndex = (currentPage.value - 1) * itemsPerPage
      const endIndex = startIndex + itemsPerPage
      return data.value.slice(startIndex, endIndex)
    })

    function previousPage() {
      if (currentPage.value > 1) {
        currentPage.value--
      }
    }

    function nextPage() {
      if (currentPage.value < totalPages.value) {
        currentPage.value++
      }
    }

    return {
      paginatedData,
      currentPage,
      totalPages,
      previousPage,
      nextPage
    }
  }
}
</script>
