<template>
  <div>
    <h1>{{yuan}}</h1>
    <h2>父级homePage</h2>
    <nuxt-child></nuxt-child>
    <!--<nuxt></nuxt>-->
    <nuxt-link to="/">返回首页</nuxt-link>
  </div>
</template>
<script>
  export default {
    layout: 'blog',
    asyncData(context) {
      return new Promise(function(resolve, reject){
        setTimeout(() => {
          console.log('homePage_asyncData');
          resolve('homePage');
        }, 3000)
      }).then(res => {
        return {
          yuan: res
        }
      })
    },
    beforeCreate() {
      console.log('beforeCreate`');
    },
    created() {
      console.log('created`');
    },
    mounted() {
      console.log('mounted`');
    }
  }
</script>
<style>

</style>
