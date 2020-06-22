<template>
  <div class="main">
    <Row type="flex" justify="center">
      <Col :xs="24" :sm="24" :md="24" :lg="18" :xl="14" class="main-list">
        <div class="tag">
          <Tabs @on-click="tagClick">
            <TabPane label="全部" ></TabPane>
            <TabPane
              v-for="item in tagList"
              :key="item.ID"
              :label="item.type_name"
            >
          </TabPane>
          </Tabs>
        </div>

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
          <span>第{{ form.page }}页/共{{ totalPage }}篇文章</span>
          <span @click="moreData(2)">
            <JIcon type="fenye-shangyiye1" size="18" @click="moreData(2)" />
          </span>
        </div>
      </Col>
      <Col :xs="0" :sm="0" :md="0" :lg="5" :xl="4">
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
import { bdSearch } from "../util/util";
export default Vue.extend({
  data() {
    return {
      form: {
        page: "1",
        page_size: "10",
        type_id: ""
      },
      list: [],
      show: false,
      totalPage: 0,
      tagList: []
    };
  },
  head() {
    return {
      title: "首页-汪中杰的个人博客",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "汪中杰的个人博客"
        },
        { name: "baidu-site-verification", content: "0u8q1FxahW" }
      ]
    };
  },
  mounted() {
    this.getList(this.form);
    bdSearch();
    this.getTag();
  },
  methods: {
    tagClick(name: any) {
      name==0?name="":""
      this.form.type_id = String(name);
      this.getList(this.form);
    },
    getTag() {
      Article.tag().then((res: any) => {
        if (res.code == 200) {
          this.tagList = res.data;
        }
      });
    },
    moreData(id: number) {
      if (id === 1) {
        if (this.form.page != "1") {
          this.form.page = String(Number(this.form.page) - 1);
          this.getList(this.form);
        }
      } else if (
        id === 2 &&
        Math.ceil(this.totalPage / Number(this.form.page_size)) >
          Number(this.form.page)
      ) {
        this.form.page = String(Number(this.form.page) + 1);
        this.getList(this.form);
      }
    },
    getList(data: Object) {
      this.show = false;
      Article.list(data).then((res: any) => {
        if (res.code == 200) {
          this.show = true;
          this.totalPage = res.data.totalSize;
          this.list = res.data.article_list;
        }
      });
    }
  },
  components: { JAuth, JList, JSkeleton, JIcon }
});
</script>

<style lang="less" scoped>
/deep/.ivu-tabs-bar{
  margin-bottom: 0;
}
.tag {
  background-color: var(--bgColor);
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  margin: 10px 0;
  border-radius: 8px;
}
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
