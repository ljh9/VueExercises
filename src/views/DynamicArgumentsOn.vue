<script>
export default {
    data() {
        return {
            eventName: 'click'
        }
    },
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
    <a v-on:[eventName]="getDateTime">get DateTime</a>
    <br/>
    <!-- shorthand -->
    <a @[eventName]="getDateTime">get DateTime</a>
  </div>
</template>