<template>
  <div class="main">
    <Row>
      <Col :xs="2" :sm="4" :md="6" :lg="8">
        1
      </Col>
      <Col :xs="20" :sm="16" :md="12" :lg="8">
        2
      </Col>
      <Col :xs="2" :sm="4" :md="6" :lg="8"> 3</Col>
    </Row>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  outline: 1px solid red;
  &-row {
    outline: 1px solid orange;
  }
}
</style>
