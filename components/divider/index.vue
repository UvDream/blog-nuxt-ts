<!--
 * @Author: wangzhongjie
 * @Date: 2020-04-15 16:34:25
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-04-15 16:44:58
 * @Description: 分割线
 * @Email: UvDream@163.com
 -->
<template>
  <div class="divider">
    <span><slot></slot></span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
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
});
</script>

<style scoped lang="less">
@import url("../../styles/theme.less");
.divider {
  display: table;
  white-space: nowrap;
  text-align: center;
  background: 0 0;
  font-weight: 500;
  color: var(--textColor);
  font-size: 16px;
  margin: 16px 0;
  span {
    padding: 0 20px;
  }
  &:before {
    content: "";
    display: table-cell;
    position: relative;
    top: 50%;
    width: 50%;
    border-top: 1px solid #e8eaec;
    transform: translateY(50%);
  }
  &:after {
    content: "";
    display: table-cell;
    position: relative;
    top: 50%;
    width: 50%;
    border-top: 1px solid #e8eaec;
    transform: translateY(50%);
  }
}
</style>
