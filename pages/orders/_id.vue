<template>
  <div>
    <h2>动态路由</h2>
    <h2>{{$route.params.id}}</h2>
  </div>
</template>
<script>
  export default {
    beforeCreate() {
      console.log('动态路由beforeCreate');
    }
  }
</script>
<style>

</style>
