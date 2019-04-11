<template>
  <div>
    <div>

      <div style="text-align: center">
        <h1>{{detail.course_name}}</h1>

        <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0"
                width="400" height="300" v-bind:id="'cc_'+detail.video_brief_link">
          <param name="movie"
                 v-bind:value="'https://p.bokecc.com/flash/single/C2401FCB0F73D923_'+detail.video_brief_link + '_false_35E7C8085202EBC3_1/player.swf'"/>
          <param name="allowFullScreen" value="true"/>
          <param name="allowScriptAccess" value="always"/>
          <param value="transparent" name="wmode"/>
          <embed
            v-bind:src="'https://p.bokecc.com/flash/single/C2401FCB0F73D923_'+detail.video_brief_link + '_false_35E7C8085202EBC3_1/player.swf'"
            width="400" height="300" name="cc_ECC9954677D8E1079C33DC5901307461" allowFullScreen="true"
            wmode="transparent" allowScriptAccess="always" pluginspage="http://www.macromedia.com/go/getflashplayer"
            type="application/x-shockwave-flash"/>
        </object>


      </div>

      <div class="tab-menu">
        <div>
          <a v-on:click="changeTab('detail')">课程概述</a>
          <a v-on:click="changeTab('chapter')">课程章节</a>
          <a v-on:click="changeTab('review')">用户评价</a>
          <a v-on:click="changeTab('question')">常见问题</a>
        </div>
      </div>
      <div style="width: 980px;margin: 0 auto">

        <div v-show="tabs.detail">

          <div>
            <ul class="price-policy">
              <li v-bind:class="[{active:num==selectCourseIndex}]" v-on:click="choiceCourse(num)"
                  v-for="(pri,num) in prices" :key="pri.id">¥{{pri.price}} (有效期 {{pri.period}} )
              </li>
            </ul>
            <a v-on:click="buyNow">购买</a>
            <a v-on:click="buyCar">加入购物车</a>
          </div>

          <p>Slogon:{{detail.course_slogan}}</p>
          <p>视频链接:{{detail.video_brief_link}}</p>
          <p>为什么学习:{{detail.why_study}}</p>
          <p>能学到什么:{{detail.what_to_study_brief}}</p>
          <p>有助于职业:{{detail.career_improvement}}</p>
          <p>课程先修:{{detail.prerequisite}}</p>
          <p>推荐课程</p>
          <ul>
            <li style="cursor: pointer" v-for="row in detail.recommends" @click="recommendCourse(row.id)">{{row.name}}
            </li>
          </ul>
        </div>
        <div v-show="tabs.chapter">课程章节内容</div>
        <div v-show="tabs.review">用户评价内容</div>
        <div v-show="tabs.question">常见问题内容</div>

      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        courseId: this.$route.params.id,
        title: null,
        videoId: 'ECC9954677D8E1079C33DC5901307461', //3120CBCC1C598F069C33DC5901307461
        selectCourseIndex: -1,
        tabs: {
          detail: true,
          chapter: false,
          review: false,
          question: false,
        },
        detail: {},
        prices: []

      }
    },
    mounted: function () {
      this.init()
    },
    methods: {
      init: function () {
        this.initDetail()
        this.initPrice()
      },
      initDetail: function () {
        let that = this;
        let courseId = this.courseId;
        let url = this.$store.state.apiList.courses + courseId + '/';
        this.$axios.request({
          url: url,
          method: "GET"
        }).then(function (response) {
          that.detail = response.data.data;
        }).catch(function (response) {

        })

      },
      initPrice: function () {
        let that = this;
        let courseId = this.courseId;
        let url = this.$store.state.apiList.pricePolicy + courseId + '/';
        this.$axios.request({
          url: url,
          method: "GET"
        }).then(function (response) {
          that.prices = response.data.data;
        }).catch(function (response) {

        })
      },
      changeTab: function (name) {
        for (let item in this.tabs) {
          if (item === name) {
            this.tabs[item] = true
          } else {
            this.tabs[item] = false
          }
        }
      },
      recommendCourse: function (courseId) {
        //this.$router.push({name: 'course-detail1-other', params: {id: courseId}});
        this.courseId = courseId
        this.init()
      },
      choiceCourse: function (index) {
        this.selectCourseIndex = index;
      },
      buyNow: function () {
        // 立即购买
        let isLogin = this.$store.getters.isLogin;
        if (!isLogin) {
          this.$router.push({name: 'login', query: {backurl: this.$route.path}})
        }
        // 跳转到


      },
      buyCar: function () {
        // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
        // 加入购物车
        let token = this.$store.state.token;
        if (!token) {
          this.$router.push({name: 'login', query: {backurl: this.$route.path}})
        }

        // 商品添加到购物车
        if (this.selectCourseIndex === -1) {
          alert('请选择价格')
        } else {
          this.$axios.request({
            url: this.$store.state.apiList.shopCar,
            method: "POST",
            data: {
              course_id: this.courseId,
              policy_id: this.prices[this.selectCourseIndex].id,
            },
            params: {
              'token': token
            }
          }).then(function (response) {
            console.log(response)
          }).catch()


        }


      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tab-menu {
    border-bottom: 1px solid #ddd;
    padding-top: 30px;
    text-align: center;
  }

  .tab-menu a {
    display: inline-block;
    padding: 20px;
    border-bottom: 2px solid transparent;
    cursor: pointer;
  }

  .tab-menu a:hover {
    border-bottom: 2px solid darkseagreen;
  }

  .price-policy .active {
    background-color: darkseagreen;
  }


</style>
