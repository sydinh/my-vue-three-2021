<template>
    <h1>{{ title }}</h1>
    <button @click="toggleModal">Open modal</button>
    <Modal v-if="showModal" :title="modalTitle" @modal-close="toggleModal">
        <template #modal-body>
            <p>{{ modalDescription }}</p>
        </template>
    </Modal>
</template>

<script>
import Modal from './components/Modal.vue';

export default {
    name: 'App',
    components: { Modal },
    data() {
        return {
            title: 'Hello World',
            modalTitle: 'Sign up',
            modalDescription:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, similique.',
            showModal: false,
        };
    },
    methods: {
        toggleModal() {
            this.showModal = !this.showModal;
        },
    },
};
</script>

<style>
#app,
#modals {
    min-height: 100vh;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
