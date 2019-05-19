<template>
  <div id="app">
    <router-view v-bind:style="{height : myHeight}"></router-view>
  </div>
</template>

<script>

export default {
  name:'app',
  data(){
    return{
      myHeight:(window.innerHeight) + 'px'
    }
  }
}


</script>

<style>

</style>
