<script>
import MyComponent from './MyComponent.vue'
export default {
    components: { MyComponent },
    data() {
        return {
            items: [{ id: 1, name: '111' }, { id: 2, name: '222' }, { id: 3, name: '333' }, { id: 4, name: '444' }]
        }
    }
}
</script>

<template>
    <div class="exercise">
        <my-component
            v-for="(item, index) in items"
            :item="item"
            :index="index"
            :key="item.id"
        ></my-component>
    </div>
</template>