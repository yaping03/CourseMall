<template>
  <div class="login">
    <form>
      <div class="login-row">
        <label>用户名: </label><input type="text" placeholder="请输入用户名" v-model="username"/>
      </div>
      <div class="login-row">
        <label>密码: </label><input v-model="password" type="password" placeholder="请输入密码"/>
      </div>
      <div class="login-row">
        <a class="btn" @click="doLogin">登陆</a>
        <span class="error" v-text="error"></span>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: "",
        password: "",
        error: ""
      }
    },
    beforeCreate: function () {
      // console.log('before created', this.username)
      // this.xxxx = '先赋值'
    },
    created: function () {
      // console.log('created', this.username)
    },
    beforeMount: function () {
      // console.log('beforeMount')
    },
    mounted: function () {
      // console.log('mounted')
    },
    beforeUpdate: function (a) {
      // console.log('beforeUpdate', a)
    },
    updated: function () {
      // console.log('updated')
    },
    computed: {
      /*
      result: {
        get: function () {
          return this.username
        },
        set: function (value) {
          this.username = value
        }
      }
      */
    },
    methods: {
      doLogin: function () {
        let that = this
        this.error = ""
        let name = this.username;
        let pwd = this.password;
        this.$axios.request({
          url: this.$store.state.apiList.auth,
          method: 'POST',
          data: {
            username: this.username,
            password: this.password
          },
          responseType: 'json'
        }).then(function (response) {
            if (response.data.code === 1000) {

              that.error = response.data.errors
            }
            else if (response.data.code === 1001) {

              that.error = response.data.errors

            } else if (response.data.code === 1002) {

              that.$store.commit('saveToken', response.data);
              let backUrl = that.$route.query.backurl
              if (backUrl) {
                that.$router.push({path: backUrl})
              } else {
                that.$router.push('/index')
              }

            } else {
              that.error = response.data.errors
            }
          }
        ).catch(function (response) {
          that.error = response
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login {
    padding: 60px;
    width: 340px;
    margin: 0 auto;
    min-height: 300px;
  }

  .login .login-row {
    padding: 20px 0;
  }

  .login label {
    width: 70px;
    text-align: right;
    display: inline-block;
    margin-right: 10px;
  }

  .login input[type='text'], input[type='password'] {
    width: 250px;
    height: 28px;
  }

  .login .btn {
    float: right;
    display: inline-block;
    border: 1px solid #dddd;
    padding: 5px 15px;
    background: #7ed321;
    color: white;
    font-size: 14px;
  }

  .login .error {
    float: right;
    display: inline-block;
    padding: 5px;
  }
</style>
