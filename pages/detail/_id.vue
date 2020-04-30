<!--
 * @Author: wangzhongjie
 * @Date: 2020-04-16 16:18:32
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-04-30 15:51:44
 * @Description: 
 * @Email: UvDream@163.com
 -->
<template>
  <div class="detail">
    <Row type="flex" justify="center">
      <Col :xs="24" :sm="24" :md="16" :lg="18" :xl="14" class="detail-content">
        <div class="detail-content-body">
          <!-- title -->
          <div class="detail-content-body-title">
            {{ articleContent.title }}
          </div>
          <!-- tag -->
          <div class="detail-content-body-tag">
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
          <div class="detail-content-body-content">
            <!-- {{ articleContent.article_content }} -->
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
      <Col :xs="0" :sm="0" :md="7" :lg="5" :xl="4">
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
      navTree: []
    };
  },
  computed: {},
  created() {},
  mounted() {
    // (this as any).$nuxt.$loading.start()
    (this as any).form.id = String(this.$route.params.id);
    // 获取初始化数据
    (this as any).getDetail((this as any).form);
  },
  watch: {},
  methods: {
    refreshNavTree(treeData: any) {
      (this as any).navTree = treeData;
    },
    jumpToAnchor(id: any) {
      let element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
      }
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
    JAnchor
  }
});
</script>

<style scoped lang="less">
@import url("../../styles/theme.less");
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
