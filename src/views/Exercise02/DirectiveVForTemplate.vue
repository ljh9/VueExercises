<script>
export default {
    data() {
        return {
            items: [{ msg: 'aa' }, { msg: 'bb' }, { msg: 'cc' }, { msg: 'dd' }]
        }
    }
}
</script>

<template>
    <div class="exercise">
        <ul>
            <template v-for="item in items" v-bind:key="item">
                <li>{{ item.msg }}</li>
                <li class="divider" role="presentation"></li>  
            </template>
        </ul>
    </div>
</template>