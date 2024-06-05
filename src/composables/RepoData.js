import { ref, onMounted} from 'vue';

const repoData = () => {
    const repositories = ref([]);
    const error = ref(null);

    onMounted(async () => {
      try {
        const response = await fetch('https://api.github.com/users/kaylezy/repos');
        if (!response.ok) {
          throw new Error('Oops! Error 404. Something went wrong. Please try again later.');
        }
        repositories.value = await response.json();
      
      } catch (err) {
        error.value = err.message ;
      }
    });

    return { repositories, error };
}

export default repoData;