<script>
export default {
    data() {
        return {
            todos: [{ name: '111' }, { name: '222' }, { name: '333' }, { name: '444' }]
        }
    }
}
</script>

<template>
    <div class="exercise">
        <template v-for="todo in todos" :key="todo.name">
            <li>{{ todo.name }}</li>    
        </template>
    </div>
</template>