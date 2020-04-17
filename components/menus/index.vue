<!--
 * @Author: wangzhongjie
 * @Date: 2020-04-13 21:47:16
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-04-17 09:51:09
 * @Description:菜单
 * @Email: UvDream@163.com
 -->
<template>
  <div class="menus">
    <Row type="flex" justify="center" align="middle">
      <Col :xs="21" :sm="21" :md="10" :lg="15" :xl="12">
        <span class="menus-logo" @click="logClick">
          U世界的V梦想
        </span>
      </Col>
      <Col :xs="3" :sm="3" :md="0" :lg="0" :xl="0"> </Col>
      <Col :xs="0" :sm="0" :md="14" :lg="8" :xl="6"></Col>
    </Row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods:{
    logClick(){
      this.$router.push({
        path:"/"
      })
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../../styles/theme.less");
.menus {
  margin-bottom: 10px;
  background-color: var(--bgColor);
  height: 50px;
  line-height: 50px;
  box-shadow: 0 0 1rem rgba(161, 177, 204, 0.4);
  &-logo {
    font-size: 20px;
    margin-left: 1rem;
    cursor: default;
  }
}
</style>
