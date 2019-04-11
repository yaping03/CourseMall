<template>
  <div class="footWrap">
    <div class="main">
      <ul class="foot-link">
        <li v-for="item in guid">
          <router-link :to="item.href">{{item.name}}</router-link>
        </li>
      </ul>
      <p class="base-style">Copyright &copy; luffy.com版权所有</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: {
          account: ''
        },
        guid: [
          {
            name: '关于我们',
            href: 'about-us'
          },
          {
            name: '联系我们',
            href: 'about-us'
          },
          {
            name: '商务合作',
            href: 'about-us'
          },
          {
            name: '帮助中心',
            href: 'help-course'
          },
          {
            name: '意见反馈',
            href: 'about-us'
          },
          {
            name: '新手指南',
            href: 'about-us'
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footWrap {
    width: 100%;
    height: 128px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #25292E;
  }

  .main {
    width: 435px;
  }

  .foot-link {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }

  .foot-link > li {
    list-style: none;
    width: 14%;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0.22px;
    cursor: pointer;
  }

  .base-style {
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0.22px;
    display: flex;
    justify-content: center;
  }

  .foot-link > li a {
    color: white;
  }
</style>
