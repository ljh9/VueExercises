<template>
    <div class="exercise">
        <span v-for="n in 10" v-bind:key="n">{{ n }}</span> 
    </div>
</template>