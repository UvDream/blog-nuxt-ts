<template>
  <div class="main">
    <Row type="flex" justify="center">
      <Col :xs="24" :sm="24" :md="16" :lg="18" :xl="14">1</Col>
      <Col :xs="0" :sm="0" :md="7" :lg="5" :xl="4">
        <JAuth />
      </Col>
    </Row>
  </div>
</template>

<script>
import JAuth from "../components/auth/index";
export default {
  components: { JAuth }
};
</script>

<style lang="less" scoped>
.main {
  background-color: #f5f5f5;
  width: 100%;
  outline: 1px solid red;
  &-row {
    outline: 1px solid orange;
  }
}
</style>
