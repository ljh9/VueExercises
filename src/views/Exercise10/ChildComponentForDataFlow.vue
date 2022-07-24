<script>
    export default {
        props: ['initialCounter2', 'size2'],
        data() {
            return {
                // counter only uses this.initialCounter as the initial value;
                // it is disconnected from future prop updates.
                counter: this.initialCounter2
            }
        },
        computed: {
            // computed property that auto-updates when the prop changes
            normalizedSize() {
                return this.size2.trim().toLowerCase()
            }
        }
    }
</script>

<template>
    <div class="exercise">
        initial value of Counter: {{ counter }}
        <br/>
        Size: {{ normalizedSize }}
        
    </div>
</template>