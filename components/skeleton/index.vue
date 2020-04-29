<!--
 * @Author: wangzhongjie
 * @Date: 2020-04-29 16:02:03
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-04-29 16:37:18
 * @Description: 骨架屏
 * @Email: UvDream@163.com
 -->
<template>
 <div>
    <div class="skeleton" v-for="item in num" :key="item">
    <h3 class="skeleton-col"></h3>
    <ul>
      <li class="skeleton-col"></li>
    </ul>
  </div>
 </div>
</template>

<script>
export default {
  props: {
    num:{
      type:Number,
      default:4
    }
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
@import url("../../styles/theme.less");
.skeleton {
  width: 100%;
  margin-top: 1rem;
  border: 1px solid var(--borderColor);
  background-color: var(--bgColor);
  border-radius: 10px;
  padding: 20px;
  &-col {
    height: 15px;
    background: #f2f2f2;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(25%, #f2f2f2),
      color-stop(37%, #e6e6e6),
      color-stop(63%, #f2f2f2)
    );
    background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
    background-size: 400% 100%;
    -webkit-animation: ant-skeleton-loading 1.4s ease infinite;
    animation: skeleton-loading 1.4s ease infinite;
  }
  h3{
    width: 40%;
  }
  ul {
    list-style: none;
    li{
      margin-top: 10px;
    }
  }
}
@keyframes skeleton-loading {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
</style>
