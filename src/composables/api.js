import axios from 'axios';
const api = axios.create({
   baseURL: 'https://api.github.com',
   headers: {
     'x-GitHub-Api-Version': '2022-11-28',
     "Accept": "application/vnd.github+json"
   }
})
export default {
    getUserRepos( username, page, perPage) {
        return api.get(`/users/${username}/repos?page=${page}&per_page=${perPage}`)
    },
    getRepoDetails(name){
        return api.get(`/repos/kaylezy/${name}`)
    },
    getRepoBranches(name){
        return api.get(`/repos/kaylezy/${name}/branches`)
    },
    getRepoDeployments(name){
        return api.get(`/repos/kaylezy/${name}/deployments`)
    }
}