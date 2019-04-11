<template>
  <div>
    <heads></heads>
    <router-view/>
    <foot></foot>

  </div>
</template>

<script>
  import heads from "./components/header/head.vue"
  import foot from "./components/footer/foot.vue"

  export default {
    components: {
      heads,
      foot
    },
    name: 'app'
  }
</script>

<style>

</style>
