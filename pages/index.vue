<template>
  <div class="main">
    <Row type="flex" justify="center">
      <Col :xs="24" :sm="24" :md="16" :lg="18" :xl="14" class="main-list">
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
  head() {
    return {
      title: "首页-汪中杰的个人博客",
      meta: [
        { hid: "description", name: "description", content: "汪中杰的个人博客" }
      ]
    };
  },
  mounted() {
    this.getList(this.form);
  },
  methods: {
    getList(data: Object) {
      Article.list(data).then((res: any) => {
        res.code == 200 ? (this.list = res.data.article_list) : "";
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
  &-list {
    padding: 0 0.5rem;
  }
}
</style>
