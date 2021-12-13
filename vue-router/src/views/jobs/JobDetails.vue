<template>
    <h1>This is job details page</h1>
    <div v-if="job">
        <p>Title: {{ job.title }}</p>
        <p>Description: {{ job.description }}</p>
        <p>Company: {{ job.company }}</p>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            job: null,
        };
    },
    mounted() {
        fetch(`http://localhost:3000/jobs/${this.id}`)
            .then((response) => response.json())
            .then((json) => (this.job = json))
            .catch((error) => console.error(error.message));
    },
};
</script>
