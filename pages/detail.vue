<!--
 * @Author: wangzhongjie
 * @Date: 2020-04-15 22:13:00
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-04-15 22:18:17
 * @Description: 详情
 * @Email: UvDream@163.com
 -->
<template>
  <div class="detail">
    <Row type="flex" justify="center">
      <Col :xs="24" :sm="24" :md="16" :lg="18" :xl="14" class="detail-content">
        <div class="detail-main">22</div>
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
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: { JAuth }
});
</script>

<style scoped lang="less">
@import url("../styles/theme.less");
.detail {
  &-content {
    padding: 0 0.5rem;
  }
  &-main {
    width: 100%;
    background-color: var(--bgColor);
    border-radius: 10px;
  }
}
</style>
