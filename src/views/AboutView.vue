<template>
  <div class="about">
    <div>
      <h4 class="" :style="st">xxxx테스트</h4>
      <p>{{price1}} 만원</p>
    </div>
    <div>
      <h4>xxxx테스트</h4>
      <p>{{price2}} 만원</p>
    </div>
    <div class="menu">
      <a v-for="(a,i) in menu" :key= "i" >{{a}}</a>
    </div>
  </div>
</template>


<script>
  export default {
    name : 'App',
    data(){
      return{ 
        price1 : 60,
        price2 : 60,
        st : 'color: blue',

        menu: ['h','g', 'j'],
      }
    }
  }
</script>
