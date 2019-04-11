<template>
  <div>
    <div style="height: 500px;">
      <h1>课程详细页面</h1>
      {{msg}}
      {{test}}
    </div>

  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: null,
        test:null,
      }
    },
    mounted: function () {
      this.msg = this.$route.params.id
      this.test = this.$store.state.user
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
