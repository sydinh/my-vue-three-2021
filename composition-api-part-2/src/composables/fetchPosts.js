import { ref } from 'vue';

const fetchPosts = () => {
    const posts = ref([]);
    const error = ref(null);
    const isLoading = ref(true);

    const getPosts = async () => {
        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/posts'
            );
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const json = await response.json();
            posts.value = json;
        } catch (e) {
            error.value = e.message;
        } finally {
            isLoading.value = false;
        }
    };

    return {
        posts,
        error,
        isLoading,
        getPosts,
    };
};

export { fetchPosts };
export default fetchPosts;
