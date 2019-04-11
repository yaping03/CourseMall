<template>
    <div class="lf-container" style="height: 500px">
      <h1>{{msg}}</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: '哎呀，不好意思你的姿势不正确吧，找不到你想要的东西！'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  h1{
    text-align: center;
  }
</style>
