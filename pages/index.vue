<template>
  <div class="main">
    <Row type="flex" justify="center">
      <Col :xs="24" :sm="24" :md="16" :lg="18" :xl="14" class="main-list">
        <JList v-for="(item, index) in list" :key="index" :data="item" />
        <div class="main-more" @click="moreData">
          <span v-if="!noData">加载更多</span>
          <span v-if="noData">没有更多数据了</span>
        </div>
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
      list: [],
      noData: false
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
    moreData() {
      this.form.page = String(Number(this.form.page) + 1);
      console.log(this.form);
      this.getList(this.form);
    },
    getList(data: Object) {
      Article.list(data).then((res: any) => {
        // res.code == 200 ? (this.list=this.list.concat(res.data.article_list)) : "";
        if (res.code == 200) {
          if (res.data.article_list.length) {
            this.list = this.list.concat(res.data.article_list);
          } else {
            this.noData = true;
          }
        }
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
  // height: 100%;
  overflow: auto;
  &-list {
    padding: 0 0.5rem;
  }
  &-more {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--bgColor);
    border: 1px solid var(--borderColor);
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    color: var(--textColor);
    margin-bottom: 1rem;
  }
}
</style>
