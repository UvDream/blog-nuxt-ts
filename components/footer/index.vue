<!--
 * @Author: wangzhongjie
 * @Date: 2020-04-14 11:09:01
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-05-08 17:18:34
 * @Description: 底部
 * @Email: UvDream@163.com
 -->
<template>
  <div class="footer">
    <div>系统由Golang+Nuxt.js+Typescript+iview驱动 By wangzhongjie</div>
    <div>
      苏ICP备20016784
    </div>
    <div>
      <Tag color="success">访问量{{ viewCount }}次</Tag>
    </div>
  </div>
</template>

<script>
import Article from "../../api/article/index";

export default {
  props: {},
  data() {
    return {
      form: {
        add: true
      },
      viewCount: ""
    };
  },
  computed: {},
  created() {},
  mounted() {
    // 存在
    if (this.$cookies.get("is_view")) {
      this.form.add = false;
    } else {
      this.$cookies.set("is_view", "true", {
        path: "/",
        maxAge: 60 * 60 * 24 * 7
      });
      this.form.add = true;
    }
    this.getView();
  },
  watch: {},
  methods: {
    getView() {
      Article.view(this.form).then(res => {
        if (res.code == 200) {
          this.viewCount = res.data;
        }
      });
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.footer {
  padding: 20px 0px;
  background-color: var(--grayBgColor);
  text-align: center;
  color: var(--textColor);
  margin-bottom: 50px;
}
</style>
