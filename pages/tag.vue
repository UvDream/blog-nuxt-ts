<!--
 * @Author: wangzhongjie
 * @Date: 2020-04-24 14:36:04
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-06-09 09:33:55
 * @Description: 我的标签
 * @Email: UvDream@163.com
 -->
<template>
  <div class="tag">
      <Row type="flex" justify="center">
      <Col :xs="24" :sm="24" :md="16" :lg="18" :xl="14" class="main-list">
          <div class="tag-content">
            <div v-for="item in list" :key="item.id" class="tag-content-block">
              <div>{{item.title}}</div>
              <div class="tag-content-block-section">
                <a v-for="a in item.children" :key="a.id" :href="a.url" target="_blank">
                <div class="title">
                  <img :src="a.img" alt="">
                  <span>
                    {{a.title}}
                  </span>
                </div>
                <div class="desc">
                  <span>
                    {{a.desc}}
                  </span>
                </div>
              </a>
              </div>
            </div>
          </div>
      </Col>
      <Col :xs="0" :sm="0" :md="7" :lg="5" :xl="4">
        <JAuth />
      </Col>
    </Row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import JAuth from "../components/auth/index.vue";

export default Vue.extend({
  props: {},
  data() {
    return {
      list:[
        {
        id:1,
        title:"常用工具网站",
        children:[
          {
            id:"1-1",
            title:"GetMind",desc:"思维导图",url:"https://gitmind.cn/",
            img:"//qncdn.aoscdn.com/local/gitmind.cn/img/logo.svg?1583114297.114"
          },
          {
             id:"1-2",
            title:"docsmall",desc:"图片压缩",url:"https://docsmall.com/",
            img:"https://cdn.docsmall.com/assets/img/33d17c9.png"
          },
          {
             id:"1-3",
            title:"codepen",desc:"在线代码编辑",url:"https://codepen.io/",
            img:"https://gitee.com/Uvdream/images/raw/master/images/20200609093337.png"
          }
        ]
      }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {JAuth}
});
</script>

<style scoped lang="less">
.tag{
  margin: 50px 0;
  &-content{
      margin: 20px 10px;
      &-block{
        &>div:first-child{
          width: 100%;
          height:40px;
          line-height: 40px;
          padding-left: 10px;
          border-radius: 2px;
          background-color: var(--bgColor);
        }
        &-section{
          display: flex;
          &>a{
            background-color: var(--bgColor);
            width:150px;
            padding: 10px;
            margin: 10px 10px;
            border-radius: 8px;
            .title{
              display: flex;
              height: 50px;
              align-items: center;
              img{
                display: inline-block;
                width: 40px;
                height: 40px;
                border-radius: 50%;
              }
              span{
                margin-left: 10px;
                color: var(--textColor);
                font-size: 15px;
              }
            }
            .desc{
              margin-top: 10px;
              span{
                color: var(--textColor);
              }
            }
          }
        }
      }
  }
}
</style>
