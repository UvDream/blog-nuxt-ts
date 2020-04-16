<!--
 * @Author: wangzhongjie
 * @Date: 2020-04-15 22:13:00
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-04-16 15:10:03
 * @Description: 详情
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
          <div class="detail-content-body-content" id="htmlView">
            <!-- {{ articleContent.article_content }} -->
            <JMark :content="articleContent.article_content" />
          </div>
        </div>
      </Col>
      <Col :xs="0" :sm="0" :md="7" :lg="5" :xl="4">
        <JAuth />
      </Col>
    </Row>
  </div>
</template>

<script>
import JAuth from "../components/auth/index.vue";
import Article from "../api/article/index";
import JIcon from "../components/icon/index.vue";
const JMark = () =>
  import("../components/vditor/index.vue").then(m => m.default);
export default {
  props: {},
  data() {
    return {
      form: {
        id: ""
      },
      articleContent: ""
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.form.id = String(this.$route.query.id);
    this.getDetail(this.form);
  },
  watch: {},
  methods: {
    getDetail(data) {
      Article.detail(data).then(res => {
        res.code == 200 ? (this.articleContent = res.data) : "";
      });
    }
  },
  components: { JAuth, JIcon, JMark }
};
</script>

<style scoped lang="less">
@import url("../styles/theme.less");
.detail {
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
