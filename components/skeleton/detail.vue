<!--
 * @Author: wangzhongjie
 * @Date: 2020-06-24 16:59:14
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-06-24 17:13:16
 * @Description: 详情骨架屏
 * @Email: UvDream@163.com
-->
<template>
  <div class="deatil">
    <div class="deatil-title"></div>
    <div class="deatil-tag">
      <section></section>
      <section></section>
      <section></section>
    </div>
    <div class="deatil-content"></div>
  </div>
</template>

<script>
export default {
  props: {},
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
.deatil {
  &-title {
    width: 400px;
    height: 40px;
    margin: 20px auto;
    background: #f2f2f2;
    border-radius: 4px;
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
  &-tag {
    display: flex;
    justify-content: center;
    & > section {
      background: #f2f2f2;
      border-radius: 4px;
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
    & > section:nth-child(1) {
      width: 100px;
      height: 20px;
    }
    & > section:nth-child(2) {
      width: 80px;
      height: 20px;
      margin: 0 10px;
    }
    & > section:nth-child(3) {
      width: 50px;
      height: 20px;
    }
  }
  &-content {
    min-height: 800px;
    margin-top: 20px;
    background: #f2f2f2;
    border-radius: 4px;
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
