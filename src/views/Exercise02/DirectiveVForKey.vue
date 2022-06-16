<script>
export default {
    data() {
        return {
            items: [{ id: 1, name: '111' }, { id: 2, name: '222' }, { id: 3, name: '333' }, { id: 4, name: '444' }]
        }
    }
}
</script>

<template>
    <div class="exercise">
        <div v-for="item in items" :key="item.id">
            {{ item.name }}     
        </div>
    </div>
</template>