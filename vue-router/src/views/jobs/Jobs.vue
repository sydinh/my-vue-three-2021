<template>
    <div v-if="jobs.length > 0">
        <ul v-for="job in jobs" :key="job.id">
            <li>
                <span>Title:</span>
                <router-link
                    :to="{ name: 'JobDetails', params: { id: job.id } }"
                >
                    {{ job.title }}
                </router-link>
            </li>
            <li><span>Description:</span> {{ job.description }}</li>
            <li><span>Company:</span> {{ job.company }}</li>
        </ul>
    </div>
    <div v-else>
        <p>No jobs found</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: [],
        };
    },
    mounted() {
        fetch('http://localhost:3000/jobs')
            .then((response) => response.json())
            .then((json) => (this.jobs = json))
            .catch((error) => console.error(error.message));
    },
};
</script>

<style>
ul {
    list-style: none;
    padding: 20px;
    margin: 0 20px 20px;
    text-align: left;
}

span {
    font-weight: bold;
}
</style>
