<!--
 * @Author: wangzhongjie
 * @Date: 2020-04-16 16:18:32
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-06-24 17:17:33
 * @Description: 
 * @Email: UvDream@163.com
 -->
<template>
  <div class="detail">
    <Row type="flex" justify="center">
      <Col :xs="24" :sm="24" :md="24" :lg="18" :xl="14" class="detail-content">
        <div class="detail-content-body">
          <SkeleTonDetail v-if="!articleContent.article_html" />

          <!-- title -->
          <div
            class="detail-content-body-title"
            v-if="articleContent.article_html"
          >
            {{ articleContent.title }}
          </div>
          <!-- tag -->
          <div
            class="detail-content-body-tag"
            v-if="articleContent.article_html"
          >
            <div>
              <JIcon type="rili" size="10" />
              {{ articleContent.add_time }}
            </div>
            <div>
              <JIcon type="biaoqian" size="10" />
              {{ articleContent.type_name }}
            </div>
            <div>
              <JIcon type="fangwenliang" size="10" />
              {{ articleContent.view_count }}
            </div>
          </div>
          <!-- content -->
          <div
            class="detail-content-body-content"
            v-if="articleContent.article_html"
          >
            <!-- {{ articleContent.article_content }} -->
            <div
              style="width:0;height:0;overflow:hidden"
              v-html="articleContent.article_html"
            ></div>

            <div
              v-outline="{
                callback: refreshNavTree,
                selectors: ['h1', 'h2', 'h3'],
                exceptSelector: '[un-nav]'
              }"
              class="content"
            >
              <JMark
                v-if="articleContent.article_content"
                :content="articleContent.article_content"
                v-model="title"
              />
            </div>
          </div>
        </div>
      </Col>
      <Col :xs="0" :sm="0" :md="0" :lg="5" :xl="4">
        <JAuth />
        <JAnchor :data="navTree" />
      </Col>
    </Row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import JAuth from "../../components/auth/index.vue";
import Article from "../../api/article/index";
import JIcon from "../../components/icon/index.vue";
import JAnchor from "../../components/title-anchor/index.vue";
const JMark = () =>
  import("../../components/vditor/index.vue").then(m => m.default);
import { bdSearch } from "../../util/util";
import SkeleTonDetail from "../../components/skeleton/detail.vue";
export default Vue.extend({
  props: {},
  watchQuery: ["page"],
  key: to => to.fullPath,
  // transition(to, from) {
  //   if (!from) {
  //     return "slide-left";
  //   }
  //   return +to.query.page < +from.query.page ? "slide-right" : "slide-left";
  // },
  head() {
    return {
      title: (this as any).articleContent.title + "-汪中杰的个人博客",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "汪中杰的个人博客"
        }
      ],
      noscript: [{ innerHTML: "请使用谷歌浏览器浏览", body: true }]
    };
  },
  data() {
    return {
      form: {
        id: ""
      },
      title: "",
      articleContent: "",
      spinShow: true,
      navTree: [],

      titleArr: []
    };
  },
  computed: {},
  created() {},
  mounted() {
    // (this as any).$nuxt.$loading.start()
    (this as any).form.id = String(this.$route.params.id);

    // 获取初始化数据
    (this as any).getDetail((this as any).form);
    bdSearch();
    (this as any).viewCount({ id: String(this.$route.params.id) });
  },
  watch: {},
  methods: {
    viewCount(data: Object) {
      Article.count(data);
    },
    refreshNavTree(treeData: any) {
      (this as any).navTree = treeData;
    },
    getDetail(data: Object) {
      Article.detail(data).then((res: any) => {
        // 获取
        res.code == 200 ? ((this as any).articleContent = res.data) : "";
      });
    }
  },

  components: {
    JAuth,
    JIcon,
    JMark,
    JAnchor,
    SkeleTonDetail
  }
});
</script>

<style scoped lang="less">
.detail {
  margin-top: 50px;
  background-color: var(--grayBgColor);
  &-content {
    padding: 0 0.5rem;
    background-color: var(--grayBgColor);
    &-body {
      margin-top: 1rem;
      width: 100%;
      padding: 0.5rem;
      background-color: var(--bgColor);
      border-radius: 10px;
      box-shadow: 0 0 1rem rgba(161, 177, 204, 0.4);
      &-title {
        text-align: center;
        font-size: 2rem;
        color: var(--themeColor);
      }
      &-tag {
        display: flex;
        justify-content: center;
        & > div {
          margin-right: 0.5rem;
        }
      }
      &-content {
        margin-top: 1rem;
      }
    }
  }
}
</style>
