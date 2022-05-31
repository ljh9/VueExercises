<script>
export default {
    methods: {
        toGetDate: function () {
            const today = new Date();
            const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            return date;
        },
        toGetTime: function () {
            const today = new Date();
            const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            return time;
        }
    }
}
</script>

<template>
  <div class="exercise">
    <span :title="toGetDate()">
        {{ toGetTime() }}
    </span>
  </div>
</template>