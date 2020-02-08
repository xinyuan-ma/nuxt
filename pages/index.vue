<template>
  <div class="container">
    <div>
      <logo />
      <img src="../assets/new_icon.png" alt="">
      <img src="../static/type1.png" alt="">
      <p>{{user.name}}{{user.age}}{{user.sex}}</p>
      <h1>{{$store.state.count}}</h1>
      <button @click="$store.commit('add')">点我</button>
      <!--<h1>{{yuan}}</h1>-->
      <!--<h1>{{data.price}}</h1>-->
      <!--<h1>{{data.des}}</h1>-->
      <h1 class="title">
        nuxtDemo1
      </h1>
      <h2 class="subtitle">
        My amazing Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import axios from 'axios'
// const Axios = axios.create()
// Axios.defaults.timeout = 8000
// Axios.defaults.withCredentials = true
// Axios.defaults.dataType = 'JSON'
export default {
  components: {
    Logo
  },
  // layout: 'blog',
  asyncData(content) {
    return axios.get('https://api.myjson.com/bins/12q7bm').then(res => {
      // console.log(res, 'https://api.myjson.com/bins/12q7bm');
      return {
        user: res.data
      }
    })
    // return data
    // setTimeout(() => {
    //   return {
    //     name: 'yuan'
    //   }
    // }, 3000)
  },
  //  asyncData (context) {
  //    console.log('asyncData');
  //    return new Promise(function(resolve, reject){
  //     setTimeout(() => {
  //       console.log('客户端11');
  //       resolve(12345678);
  //     }, 3000)
  //   }).then(res => {
  //      console.log('客户端22');
  //     return {
  //       yuan: res
  //     }
  //   })
  // },
  head () {
    return {
      title: '设置title',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  async mounted () {
    console.log('mounted123');
    let data = await new Promise(function(resolve, reject){
      setTimeout(() => {
        resolve(12345);
      }, 2000)
    })
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
