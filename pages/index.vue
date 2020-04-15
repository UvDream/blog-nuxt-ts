<template>
  <div class="main">
    <Row type="flex" justify="center" gutter="10">
      <Col :xs="24" :sm="24" :md="16" :lg="18" :xl="14">
        <JList v-for="(item, index) in list" :key="index" :data="item" />
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
import JList from "../components/list/index.vue";
import Article from "../api/article/index";

export default Vue.extend({
  data() {
    return {
      form: {
        page: "1",
        page_size: "10"
      },
      list: []
    };
  },
  mounted() {
    this.getList(this.form);
  },
  methods: {
    getList(data: Object) {
      Article.list(data).then((res: any) => {
        console.log("h获取文章列表", res);
        res.code == 200 ? (this.list = res.data.article_list) : "";
        console.log(this.list);
      });
    }
  },
  components: { JAuth, JList }
});
</script>

<style lang="less" scoped>
@import url("../styles/theme.less");

.main {
  background-color: var(--grayBgColor);
  width: 100%;
  &-row {
    outline: 1px solid orange;
  }
}
</style>
