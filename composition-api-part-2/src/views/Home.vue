<template>
    <div v-if="isLoading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
        <PostList :posts="posts" />
    </div>
</template>

<script>
import PostList from '../components/PostList.vue';
import { fetchPosts } from '../composables/fetchPosts';

export default {
    name: 'Home',
    components: { PostList },
    setup() {
        const { posts, error, isLoading, getPosts } = fetchPosts();

        getPosts();

        return {
            posts,
            error,
            isLoading,
        };
    },
};
</script>
