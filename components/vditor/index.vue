<!--
 * @Author: wangzhongjie
 * @Date: 2020-04-16 13:58:23
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-06-19 16:04:31
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

    document.addEventListener("copy", event => {
      if (typeof window.getSelection == "undefined") return;
      let body_element = document.getElementsByTagName("body")[0];
      let selection = window.getSelection();
      if (("" + selection).length < 30) return;
      let newDiv = document.createElement("div");
      newDiv.style.position = "absolute";
      newDiv.style.left = "-99999px";
      body_element.appendChild(newDiv);

      if (event.target.value) {
        console.log("代码---------------------------------");
        let c = document.createElement("pre");
        c.innerHTML = event.target.value;
        newDiv.appendChild(c);
      } else {
        newDiv.appendChild(selection.getRangeAt(0).cloneContents());
      }

      if (selection.getRangeAt(0).commonAncestorContainer.nodeName == "PRE") {
        newdiv.innerHTML = "<pre>" + newdiv.innerHTML + "</pre>";
      }
      // 添加text
      // newDiv.innerHTML += "<br />\r\n原文地址："+ document.location.href + "\r\n &copy; Feiniaomy.com";
      newDiv.innerHTML +=
        "<br />原文地址: <a href='" +
        document.location.href +
        "'>" +
        document.location.href +
        "</a> &copy; https://www.UvDream.cn";
      selection.selectAllChildren(newDiv);
      // 链接
      window.setTimeout(function() {
        body_element.removeChild(newDiv);
      }, 200);
    });
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
        // anchor: true,
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
