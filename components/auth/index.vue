<!--
 * @Author: wangzhongjie
 * @Date: 2020-04-14 11:21:23
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-04-15 14:10:14
 * @Description: 信息栏
 * @Email: UvDream@163.com
 -->
<template>
  <div class="auth">
    <img src="http://118.25.110.93:81/images/avatar.jpeg" alt />
    <div>让技术产生价值</div>
    <Divider>社交账号</Divider>
    <div class="auth-socializing">
      <Tooltip content="https://github.com/uvdream" theme="light">
        <a
          href="https://github.com/uvdream"
          target="view_window"
          class="auth-icon"
        >
          <JIcon type="github" size="25" style="position:relative;top:-2px" />
        </a>
      </Tooltip>
      <Tooltip content="微信号:wzj913906565" theme="light">
        <a href class="auth-icon">
          <JIcon type="weixin" />
        </a>
      </Tooltip>

      <Tooltip content="913906565" theme="light">
        <a href target="view_window" class="auth-icon">
          <JIcon />
        </a>
      </Tooltip>
    </div>
  </div>
</template>

<script>
import JIcon from "../icon/index";
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
  components: { JIcon }
};
</script>

<style scoped lang="less">
@import url("../../styles/theme.less");
.auth {
  text-align: center;
  width: 100%;
  background-color: var(--bgColor);
  border-radius: 8px;
  box-shadow: 0 0 1rem rgba(161, 177, 204, 0.4);
  padding: 20px;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  &-socializing {
    display: flex;
    align-items: center;
    margin: 0 auto;
    justify-content: center;
  }
  &-icon {
    display: flex;
    align-items: center;
    margin: 0 10px;
    & > span {
      color: var(--textColor);
      &:hover {
        color: #2d8cf0;
      }
    }
  }
}
</style>
