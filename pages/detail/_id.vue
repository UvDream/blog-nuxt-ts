<!--
 * @Author: wangzhongjie
 * @Date: 2020-04-16 16:18:32
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-04-20 21:32:41
 * @Description: 
 * @Email: UvDream@163.com
 -->
<template>
  <div class="detail">
    <Row type="flex" justify="center">
      <Col :xs="24" :sm="24" :md="16" :lg="18" :xl="14" class="detail-content">
        <Spin size="large" fix v-if="spinShow"></Spin>
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
            <JMark :content="articleContent.article_content" v-model="title" />
          </div>
        </div>
      </Col>
      <Col :xs="0" :sm="0" :md="7" :lg="5" :xl="4">
        <JAuth />
        <JAnchor :data="title" />
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
  data() {
    return {
      form: {
        id: ""
      },
      articleContent: "",
      title: "",
      spinShow: true
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.form.id = String(this.$route.params.id);
    this.getDetail(this.form);
  },
  watch: {},
  methods: {
    getDetail(data: Object) {
      Article.detail(data).then((res: any) => {
        res.code == 200 ? (this.articleContent = res.data) : "";
        res.code == 200 ? (this.spinShow = false) : (this.spinShow = true);
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
  background-color: var(--grayBgColor);
  &-content {
    padding: 0 0.5rem;
    &-body {
      width: 100%;
      padding: 1rem;
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
    }
  }
}
</style>
