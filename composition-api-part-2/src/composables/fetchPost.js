import { ref } from 'vue';

const fetchPost = (id) => {
    const post = ref(null);
    const error = ref(null);
    const isLoading = ref(true);

    const getPost = async () => {
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${id}`
            );
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const json = await response.json();
            post.value = json;
        } catch (e) {
            error.value = e.message;
        } finally {
            isLoading.value = false;
        }
    };

    return {
        post,
        error,
        isLoading,
        getPost,
    };
};

export { fetchPost };
export default fetchPost;
