<template>
  <div class="main">
    <Row type="flex" justify="center">
      <Col :xs="24" :sm="24" :md="16" :lg="18" :xl="14" class="main-list">
        <JList
          v-for="(item, index) in list"
          :key="index"
          :data="item"
          v-show="show"
        />
        <JSkeleton :num="10" v-show="!show" />
        <div class="main-more">
          <span @click="moreData(1)">
            <JIcon type="fenye-shangyiye" size="18" @click="moreData(1)" />
          </span>
          <span>第{{ form.page }}页/共{{totalPage}}篇文章</span>
          <span @click="moreData(2)">
            <JIcon type="fenye-shangyiye1" size="18" @click="moreData(2)" />
          </span>
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
import JSkeleton from "../components/skeleton/index.vue";
import JIcon from "../components/icon/index.vue";
export default Vue.extend({
  data() {
    return {
      form: {
        page: "1",
        page_size: "10"
      },
      list: [],
      show: false,
      totalPage:0
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
    moreData(id: number) {
      if (id === 1) {
        if (this.form.page != "1") {
          this.form.page = String(Number(this.form.page) - 1);
          this.getList(this.form);
        }
      } else if (id === 2) {
        this.form.page = String(Number(this.form.page) + 1);
        this.getList(this.form);
      }
    },
    getList(data: Object) {
      this.show = false;
      Article.list(data).then((res: any) => {
        if (res.code == 200) {
          this.show = true;
          this.totalPage=res.data.totalSize
          if (res.data.article_list.length === 0) {
             this.$Notice.warning({
                    title: '警告',
                    desc:'没有更多数据了! '
                });
            this.form.page = String(Number(this.form.page) - 1);
          } else {
            this.list = res.data.article_list;
          }
        }
      });
    }
  },
  components: { JAuth, JList, JSkeleton, JIcon }
});
</script>

<style lang="less" scoped>
@import url("../styles/theme.less");

.main {
  background-color: var(--grayBgColor);
  width: 100%;
  // height: 100%;
  margin: 50px 0;
  &-list {
    padding: 0 0.5rem;
  }
  &-more {
    height: 40px;
    display: flex;
    justify-content: space-between;
    padding: 0 0.5rem;
    align-items: center;
    background-color: var(--bgColor);
    border: 1px solid var(--borderColor);
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    color: var(--textColor);
    margin: 1rem 0;
    span {
      letter-spacing: 2px;
    }
  }
}
</style>
