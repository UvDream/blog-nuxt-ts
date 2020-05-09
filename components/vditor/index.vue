<!--
 * @Author: wangzhongjie
 * @Date: 2020-04-16 13:58:23
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-05-09 10:48:01
 * @Description: 解析器
 * @Email: UvDream@163.com
 -->
<template>
  <div>
    <div id="htmlView" class="htmlView"></div>
  </div>
</template>

<script>
import "../../styles/vditor.css";
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
        // this.title.forEach(element => {
        //   console.log(element.innerText)
        // });
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

<style scoped lang="less">
@import url("../../styles/theme.less");
/deep/h1 {
  color: var(--themeColor);
  border-bottom: 1px solid var(--themeColor);
}
/deep/h2 {
  color: var(--themeColor);
  border-bottom: none;
  position: relative;
  /deep/ &::before {
    content: "";
    position: absolute;
    top: 5px;
    left: -10px;
    width: 5px;
    height: 20px;
    background-color: var(--themeColor);
  }
}
/deep/h3,
/deep/h4,
/deep/h5,
/deep/h6 {
  color: var(--themeColor);
}
/deep/p,
/deep/ol {
  color: var(--textColor);
}
/deep/img {
  // width: 100%;
  display: block;
  margin: 0 auto;
}
/deep/iframe {
  width: 100%;
  height: 40rem;
}
.htmlView {
  padding: 1rem 1.5rem;
}
</style>
