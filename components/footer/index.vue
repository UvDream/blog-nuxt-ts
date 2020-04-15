<!--
 * @Author: wangzhongjie
 * @Date: 2020-04-14 11:09:01
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-04-15 14:22:16
 * @Description: 底部
 * @Email: UvDream@163.com
 -->
<template>
  <div class="footer">
    <div>系统由Golang+Nuxt.js+iview驱动 By wangzhongjie</div>
    <div>
      苏ICP备20016784
    </div>
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
@import url("../../styles/theme.less");
.footer {
  padding: 20px 0px;
  background-color: var(--grayBgColor);
  text-align: center;
  color: var(--textColor);
}
</style>
