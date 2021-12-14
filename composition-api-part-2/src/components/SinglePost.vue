<template>
    <h1>{{ post.title }}</h1>
    <p>{{ snippet }}</p>
</template>

<script>
import { computed } from 'vue';

export default {
    name: 'SinglePost',
    props: {
        post: Object,
    },
    setup(props) {
        const snippet = computed(() => {
            return props.post.body.slice(0, 100) + '...';
        });

        return {
            snippet,
        };
    },
};
</script>
