<template>
    <div v-if="isLoading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="post">
        <h1>Post detail ID-{{ id }}</h1>
        <h4>{{ post.title }}</h4>
        <p>{{ post.body }}</p>
    </div>
</template>

<script>
import { fetchPost } from '../composables/fetchPost';

export default {
    props: ['id'],
    setup(props) {
        const { post, error, isLoading, getPost } = fetchPost(props.id);

        getPost();

        return {
            post,
            error,
            isLoading,
        };
    },
};
</script>
