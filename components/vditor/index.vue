<!--
 * @Author: wangzhongjie
 * @Date: 2020-04-16 13:58:23
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-04-16 16:03:36
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
    return {
      title: []
    };
  },
  computed: {},
  created() {},
  mounted() {
    if (process.client) {
      this.reviewHtml(this.content);
      setTimeout(() => {
        this.title = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
        this.$emit("input", this.title);
      }, 1000);
    }
  },
  watch: {
    allHtml: {
      handler(val, old) {},
      deep: true
    },
    content: function(val) {
      this.reviewHtml(val);
    }
  },
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
        }
      });
    }
  },
  updated() {
    console.log("update");
  },

  components: {}
};
</script>

<style scoped lang="less"></style>
