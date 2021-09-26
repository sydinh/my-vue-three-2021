<template>
    <p>Reaction time: {{ score }} ms</p>
    <h1>Rank: {{ rank }}</h1>
</template>

<script>
export default {
    props: ['score'],
    data() {
        return {
            rank: null,
        };
    },
    mounted() {
        this.rank = this.getRank(this.score);
    },
    methods: {
        getRank(score) {
            if (score < 250) {
                return 'Saarik Fingers';
            } else if (score < 400) {
                return 'Rapid Reflexes';
            } else {
                return 'Finger Master';
            }
        },
    },
};
</script>

<style></style>
