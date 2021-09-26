<template>
    <div v-if="showBlock" class="block" @click="stopTimer">Click me</div>
</template>

<script>
export default {
    props: ['delay'],
    data() {
        return {
            showBlock: false,
            timer: null,
            reactionTime: 0,
        };
    },
    mounted() {
        setTimeout(() => {
            this.showBlock = true;
            this.startTimer();
        }, this.delay);
    },
    methods: {
        startTimer() {
            this.timer = setInterval(() => {
                this.reactionTime += 10;
            }, 10);
        },
        stopTimer() {
            clearInterval(this.timer);
            this.$emit('end', this.reactionTime);
        },
    },
};
</script>

<style>
.block {
    margin: 10px;
    padding: 10px;
    color: #fff;
    background: #444;
    border-radius: 5px;
    cursor: pointer;
}
</style>
