<!--
 * @Author: wangzhongjie
 * @Date: 2020-04-16 13:58:23
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-04-16 15:09:38
 * @Description: 解析器
 * @Email: UvDream@163.com
 -->
<template>
  <div>
    <div id="htmlView"></div>
  </div>
</template>

<script>
import "vditor/dist/index.css";
export default {
  props: {
    content: ""
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {
    if (process.client) {
      this.reviewHtml(this.content);
    }
  },
  watch: {},
  methods: {
    reviewHtml(data) {
      require("vditor").preview(document.getElementById("htmlView"), data, {
        speech: {
          enable: true
        },
        anchor: true,
        hljs: {
          enable: true,
          lineNumber: true,
          style: "native"
        },
        markdown: {
          toc: true
        },
        transform: element => {
          //   console.log("渲染之前回调");
          return element;
        }
      });
    }
  },
  components: {}
};
</script>

<style scoped lang="less"></style>
