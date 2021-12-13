<template>
    <ul v-for="job in jobs" :key="job.id">
        <li>
            <span>Title:</span>
            <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
                {{ job.title }}
            </router-link>
        </li>
        <li><span>Description:</span> {{ job.description }}</li>
        <li><span>Company:</span> {{ job.company }}</li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                {
                    id: 1,
                    title: 'Frontend Developer',
                    description:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius similique qui atque ad obcaecati temporibus.',
                    company: 'Google',
                },
                {
                    id: 2,
                    title: 'Backend Developer',
                    description:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius similique qui atque ad obcaecati temporibus.',
                    company: 'Facebook',
                },
                {
                    id: 3,
                    title: 'Full-stack Developer',
                    description:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius similique qui atque ad obcaecati temporibus.',
                    company: 'Twitter',
                },
            ],
        };
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
