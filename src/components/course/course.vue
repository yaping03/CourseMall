<template>
  <div class="pg-body">
    <div class="course-banner">
      <div class="course-banner-top">
        <img src="../../assets/img/course/course-banner-top.png" width="529" height="50" alt="">
      </div>
      <div style="margin-top: 24px;">
        <img src="../../assets/img/course/course-banner-bottom.png" width="837" height="30" alt="">
      </div>
      <router-link class="join" to="/course/detail1/5">
        <span class="join-now">立即加入</span>
      </router-link>
    </div>


    <!--项目实战 你的同行都在学-->
    <div class="course-model">
      <div class="model-wrap" style="width: 1150px; margin:0 auto;">
        <h3 class="course-model-tit">项目实战&nbsp;你的同行都在学</h3>
        <p class="course-model-dec">更全面的实战案例、更细致的讲解和课后辅导，让你的职业生涯能更轻松的完成进阶</p>
        <em style="width: 77px; border-top: 1px solid #7ED321; margin: 31px auto 78px; "></em>
        <div style="width: 100%; display: flex; justify-content: space-between;">

          <router-link :to="{'path':'/course/detail'+item.template_id + '/'+item.id }" v-for="item in courseList"
                       style="width:350px; cursor: pointer;" :key="item.id">
            <div style="width:350px; height:238px;">
              <div style="width:350px; height:238px; clear: both;overflow: hidden; zoom: 1;">
                <img class="sub-img" src="../../assets/img/course/course-img1.png" width="350" height="238">
              </div>
            </div>
            <div
              style="width:350px; height:180px; display: flex; justify-content: center; box-shadow: 0 4px 2px 0 #E8E8E8;">
              <div style="width: 301px; text-align: center;">
                <h4 class="course-tit">{{item.name}}</h4>
                <p class="course-dec">{{item.brief}}</p>
                <span class="course-lever">难度：{{item.level}}</span>
              </div>
            </div>
          </router-link>

        </div>

      </div>
    </div>

    <!--项目实战 你的同行都在学-->
    <div class="course-model">
      <div class="model-wrap" style="width: 1150px; margin:0 auto;">
        <h3 class="course-model-tit">项目实战&nbsp;你的同行都在学</h3>
        <p class="course-model-dec">更全面的实战案例、更细致的讲解和课后辅导，让你的职业生涯能更轻松的完成进阶</p>
        <em style="width: 77px; border-top: 1px solid #7ED321; margin: 31px auto 78px; "></em>
        <div style="width: 100%; display: flex; justify-content: space-between;">
          <div style="width:350px; cursor: pointer;">
            <div style="width:350px; height:238px;">
              <div style="width:350px; height:238px; clear: both;overflow: hidden; zoom: 1;">
                <img class="sub-img" src="../../assets/img/course/course-img1.png" width="350" height="238">
              </div>
            </div>
            <div
              style="width:350px; height:180px; display: flex; justify-content: center; box-shadow: 0 4px 2px 0 #E8E8E8;">
              <div style="width: 301px; text-align: center;">
                <h4 class="course-tit">爬虫开发实战</h4>
                <p class="course-dec">通过掌握解锁更多高级爬虫知识，就可以有能力突破
                  一些常规的反爬限制，爬取你想要的数据。</p>
                <span class="course-lever">难度：高级</span>
              </div>
            </div>
          </div>
          <div style="width:350px; cursor: pointer;">
            <div style="width:350px; height:238px;">
              <div style="width:350px; height:238px; clear: both;overflow: hidden; zoom: 1;">
                <img class="sub-img" src="../../assets/img/course/crm.png" width="350" height="238">
              </div>
            </div>
            <div
              style="width:350px; height:180px; display: flex; justify-content: center; box-shadow: 0 4px 2px 0 #E8E8E8;">
              <div style="width: 301px; text-align: center;">
                <h4 class="course-tit">CRM客户关系管理系统项目开发实战</h4>
                <p class="course-dec">通过此项目，你将学会一个复杂项目如何从需求讨论、构思、架构设计、代码开发、功能实现的全过程！</p>
                <span class="course-lever">难度：中级</span>
              </div>
            </div>
          </div>
          <div style="width:350px; cursor: pointer;">
            <div style="width:350px; height:238px;">
              <div style="width:350px; height:238px; clear: both;overflow: hidden; zoom: 1;">
                <img class="sub-img" src="../../assets/img/course/course-img3.png" width="350" height="238">
              </div>
            </div>
            <div
              style="width:350px; height:180px; display: flex; justify-content: center; box-shadow: 0 4px 2px 0 #E8E8E8;">
              <div style="width: 301px; text-align: center;">
                <h4 class="course-tit">WEB QQ聊天项目实战</h4>
                <p class="course-dec">京东、淘宝的在线客服系统都用了什么技术？通过<br>此项目的学习，可以大大提高你的前端开发能力</p>
                <span class="course-lever">难度：中级</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!--专业好课 涵盖金融与机器学习-->
    <div class="course-model">
      <div class="model-wrap" style="width: 1150px; margin:0 auto;">
        <h3 class="course-model-tit">专业好课 涵盖金融与机器学习</h3>
        <p class="course-model-dec">学习未来所需技能，挑战实战项目，获得行业领导者的认可和认证</p>
        <em style="width: 77px; border-top: 1px solid #7ED321; margin: 31px auto 78px; "></em>
        <div style="width: 100%; display: flex; justify-content: space-between;">
          <div style="width:350px; cursor: pointer;" v-link="{name:'algorithm-course-detail',params:{id:10}}">
            <div style="width:350px; height:202px;">
              <div style="width:350px; height:202px; clear: both;overflow: hidden; zoom: 1;">
                <img src="../../assets/img/course/course-img7.png" width="350" height="202">
              </div>
            </div>
            <div
              style="width:350px; height: 300px;  background: #FFFFFF; text-align: center; box-shadow: 0 4px 9px 0 #E9E9E9;">
              <div style="width: 100%; position: relative; top: -35px; left: 50%; z-index: 34;  margin:0 0 0 -35px;">
                <div
                  style="width:70px; height: 70px; border-radius: 35px;background: #FFFFFF;box-shadow: 0 2px 4px 0 #E9E9E9;display: flex; align-items: center;justify-content: center;">
                  <img src="../../assets/img/course/icon-line.png" alt="">
                </div>
              </div>
              <h4 class="course-tit" style="margin: -10px 0 25px; color: #000;">算法入门</h4>
              <p class="course-dec" style="width: 278px; text-align: center; margin: 24px auto 0;">
                算法是计算机科学中最有魅力的领域，算法培养的是思考问题解决问题的通性通法，掌握常用算法知识，重新思考如何把你的程序变高效</p>
              <span class="course-lever" style="display: block; margin-top: 10px; height: 48px; line-height: 48px;">难度：初级</span>
              <!--<button class="course-subject-btn">查看更多</button>-->
            </div>
          </div>
          <div style="width:350px; cursor: pointer;" v-link="{name:'finance-course-detail',params:{id:7}}">
            <div style="width:350px; height:202px;">
              <div style="width:350px; height:202px; clear: both;overflow: hidden; zoom: 1;">
                <img class="sub-img" src="../../assets/img/course/course-img8.png" width="350" height="202">
              </div>
            </div>
            <div
              style="width:350px; height: 300px;  background: #FFFFFF; text-align: center; box-shadow: 0 4px 9px 0 #E9E9E9;">
              <div style="width: 100%; position: relative; top: -35px; left: 50%; z-index: 34;  margin:0 0 0 -35px;">
                <div
                  style="width:70px; height: 70px; border-radius: 35px;background: #FFFFFF;box-shadow: 0 2px 4px 0 #E9E9E9;display: flex; align-items: center;justify-content: center;">
                  <img src="../../assets/img/course/icon-line.png" alt="">
                </div>
              </div>
              <h4 class="course-tit" style="margin: -10px 0 25px; color: #000;">金融量化自动化分析&交易入门</h4>
              <p class="course-dec" style="width: 278px; text-align: center; margin: 24px auto 0;">
                Python在金融分析领域应用非常普遍，本课程将带你在掌握金融股票、量化交易相关知识的基础上，探索如何通过Python开发一个量化交易平台</p>
              <span class="course-lever" style="display: block; margin-top: 10px; height: 48px; line-height: 48px;">难度：初级</span>
              <!-- <button class="course-subject-btn">查看更多</button>-->
            </div>
          </div>
          <div @click="recording_remind()" style="width:350px; cursor: pointer;">
            <div style="width:350px; height:202px;">
              <div style="width:350px; height:202px; clear: both;overflow: hidden; zoom: 1;">
                <img class="sub-img" src="../../assets/img/course/course-img9.png" width="350" height="202">
              </div>
            </div>
            <div
              style="width:350px; height: 300px;  background: #FFFFFF; text-align: center; box-shadow: 0 4px 9px 0 #E9E9E9;">
              <div style="width: 100%; position: relative; top: -35px; left: 50%; z-index: 34;  margin:0 0 0 -35px;">
                <div
                  style="width:70px; height: 70px; border-radius: 35px;background: #FFFFFF;box-shadow: 0 2px 4px 0 #E9E9E9;display: flex; align-items: center;justify-content: center;">
                  <img src="../../assets/img/course/icon-line.png" alt="">
                </div>
              </div>
              <h4 class="course-tit" style="margin: -10px 0 25px; color: #000;">机器学习-根据自然语言分析预测票房走势</h4>
              <p class="course-dec" style="width: 278px; text-align: center; margin: 24px auto 0;">
                机器学习标志着计算机科学、数据分析、软件工程和人工智能领域内的重大技术突破。AlphaGo 战胜人类围棋冠军、人脸识别、大数据挖掘，都和机器学习密切相关。
              </p>
              <span class="course-lever" style="display: block; margin-top: 10px; height: 48px; line-height: 48px;">难度：中级</span>
              <!-- <button class="course-subject-btn">查看更多</button>-->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--初级好课 迅速Get新技能-->
    <div class="course-model" style="padding-bottom: 144px;">
      <div class="model-wrap" style="width: 1150px; margin:0 auto;">
        <h3 class="course-model-tit">初级好课 迅速Get新技能</h3>
        <p class="course-model-dec">零基础开始，掌握进入数据分析、人工智能领域必备的专业技能</p>
        <em style="width: 77px; border-top: 1px solid #7ED321; margin: 31px auto 78px; "></em>
        <div style="width: 100%; display: flex; justify-content: space-between;">
          <div style="width:350px; cursor: pointer;" v-link="{name:'python-course-detail',params:{id:5}}">
            <div style="width:350px; height:238px;">
              <div style="width:350px; height:238px; clear: both;overflow: hidden; zoom: 1;">
                <img src="../../assets/img/course/course-img10.png" width="350" height="238">
              </div>
            </div>
            <div style="width:350px; height: 284px;  background: #FFFFFF; box-shadow: 0 4px 2px 0 #E9E9E9;">
              <div style="width: 281px; text-align: left; margin: 0 auto;">
                <h4 class="course-tit" style="margin: 30px 0 0; color: #000;">Python开发21天入门必备</h4>
                <p class="course-dec" style="margin: 15px auto 0; text-align: left;">
                  Python已经成为目前最流行的编程语言，人工智能、机器学习、云计算、大数据开发、爬虫、WEB开发、金融量化、自动化运维、测试、游戏开发等都是Python极为擅长的领域，掌握Python语言已成为技术人员的必备能力
                </p>
                <span class="course-lever" style="display: block; margin-top: 11px;">难度：初级</span>
              </div>
            </div>
          </div>
          <div style="width:350px; cursor: pointer;" v-link="{name:'web-course-detail',params:{id:8}}">
            <div style="width:350px; height:238px;">
              <div style="width:350px; height:238px; clear: both;overflow: hidden; zoom: 1;">
                <img src="../../assets/img/course/course-img11.png" width="350" height="238">
              </div>
            </div>
            <div style="width:350px; height: 284px;  background: #FFFFFF; box-shadow: 0 4px 2px 0 #E9E9E9;">
              <div style="width: 281px; text-align: left; margin: 0 auto;">
                <h4 class="course-tit" style="margin: 30px 0 0; color: #000;">WEB开发入门</h4>
                <p class="course-dec" style="margin: 15px auto 0; text-align: left;">
                  学习网页开发的基本原理和应用知识，为开发自己的WEB程序打下基础！
                </p>
                <span class="course-lever" style="display: block; margin-top: 11px;">难度：初级</span>
              </div>
            </div>
          </div>
          <div style="width:350px; cursor: pointer;" v-link="{name:'computer-course-detail',params:{id:1}}">
            <div style="width:350px; height:238px;">
              <div style="width:350px; height:238px; clear: both;overflow: hidden; zoom: 1;">
                <img src="../../assets/img/course/course-img12.png" width="350" height="238">
              </div>
            </div>
            <div style="width:350px; height: 284px;  background: #FFFFFF; box-shadow: 0 4px 2px 0 #E9E9E9;">
              <div style="width: 281px; text-align: left; margin: 0 auto;">
                <h4 class="course-tit" style="margin: 30px 0 0; color: #000;">计算机硬件与操作系统原理入门</h4>
                <p class="course-dec" style="margin: 15px auto 0; text-align: left;">
                  对于非计算机专业从业者且想进入IT技术领域的初学者，了解计算机硬件之间的关系，操作系统的基本原理，软件与硬件之间如何交互等，都是必须要掌握的基础知识。
                </p>
                <span class="course-lever" style="display: block; margin-top: 11px;">难度：初级</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        msg: '课程页面',
        courseList: []
      }
    },
    mounted: function () {
      this.initCourses()
    },
    methods: {
      initCourses: function () {

        let that = this

        this.$axios.request({
          url: this.$store.state.apiList.courses,
          method: 'GET',
        }).then(function (response) {
          if (response.data.status) {
            that.courseList = response.data.data
          }
        }).catch(function (response) {
          alert(response)
        })

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .course-banner-top {
    margin-top: 100px;
  }

  .course-banner {
    width: 100%;
    height: 490px;
    overflow: hidden;
    text-align: center;
    background: #F9F9F9;
    background: url("../../assets/img/course/course-banner.png") no-repeat;
    background-size: 100% auto;
  }

  .join {
    width: 100%;
    text-align: center;
    margin-top: 58px;
  }

  .join-now {
    cursor: pointer;
    display: inline-block;
    width: 239px;
    height: 74px;
    line-height: 74px;
    background: #84CC39;
    border-radius: 100px;
    font-size: 24px;
    color: #FFFFFF;
  }

  .course-model-dec {
    font-size: 14px;
    color: #9A9A9A;
    letter-spacing: 0.03px;
    margin: 20px auto 19px;
  }

  .course-model-tit {
    font-size: 24px;
    color: #333333;
    letter-spacing: 0.54px;
    line-height: 42px;
    padding-top: 78px;
    margin: 0;
  }

  .course-model {
    width: 100%;
    background: #fff;
    text-align: center;
  }

  .course-tit {
    font-size: 16px;
    color: #333;
    letter-spacing: .36px;
    margin: 30px auto 16px;
  }

  .course-dec {
    font-size: 12px;
    color: #4a4a4a;
    letter-spacing: .27px;
    line-height: 25px;
    text-align: center;
  }
</style>
