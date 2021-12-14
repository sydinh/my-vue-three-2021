<template>
    <div class="home">
        <h1>Refs</h1>
        <p>{{ personOne.name }} - {{ personOne.age }}</p>
        <button @click="updatePersonOne">Update person one</button>

        <h1>Reactive</h1>
        <p>{{ personTwo.name }} - {{ personTwo.age }}</p>
        <button @click="updatePersonTwo">Update person two</button>

        <h1>Computed</h1>
        <input type="text" v-model="term" />
        <div v-for="name in matchingNames" :key="name">{{ name }}</div>

        <h1>Watched</h1>
        <button @click="stopWatching">Stop watching</button>
    </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from 'vue';

export default {
    name: 'Home',
    setup() {
        const personOne = ref({ name: 'John', age: 30 });
        const personTwo = reactive({ name: 'Jane', age: 25 });

        const updatePersonOne = () => {
            personOne.value.name = 'John Doe';
            personOne.value.age = 40;
        };
        const updatePersonTwo = () => {
            personTwo.name = 'Jane Doe';
            personTwo.age = 35;
        };

        const term = ref('');
        const names = ref(['John', 'Jane', 'Bob']);

        const matchingNames = computed(() => {
            return names.value.filter((name) => name.includes(term.value));
        });

        const stopWatch = watch(term, () => {
            console.log('term changed');
        });

        const stopWatchEffect = watchEffect(() => {
            console.log('watchEffect changed', term.value);
        });

        const stopWatching = () => {
            stopWatch();
            stopWatchEffect();
        };

        return {
            personOne,
            personTwo,
            updatePersonOne,
            updatePersonTwo,
            term,
            matchingNames,
            stopWatching,
        };
    },
};
</script>
