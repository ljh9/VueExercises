<script>
export default {
    methods: {
        getDateTime: function () {
            const today = new Date();
            const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            alert(date + ' ' + time);
        }
    }
}
</script>

<template>
  <div class="exercise">
    <a v-on:click="getDateTime">get DateTime</a>
    <br/>
    <!-- shorthand -->
    <a @click="getDateTime">get DateTime</a>
  </div>
</template>