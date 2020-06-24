<!--
 * @Author: wangzhongjie
 * @Date: 2020-04-16 16:43:04
 * @LastEditors: PanBaoQuan
 * @LastEditTime: 2020-06-24 15:23:51
 * @Description: 文章目录
 * @Email: UvDream@163.com
 -->
<template>
  <Affix :offset-top="50">
    <!-- <Anchor show-ink class="anchor">
      <AnchorLink
        v-for="item in data"
        :key="item.id"
        :href="'#' + item.title"
        :title="item.title"
      >
        <AnchorLink
          v-show="item.children"
          v-for="j in item.children"
          :key="j.id"
          :href="'#' + j.title"
          :title="j.title"

        ></AnchorLink>
      </AnchorLink>
    </Anchor>-->
    <outline-tree :treeData="data" class="anchor" ref="tree">
      <div slot-scope="{ data, parentData, level }">
        <div
          :id="data.id"
          class="node-render-content"
          :class="{active:data.id==activeId}"
          @click.stop="jumpToAnchor(data.id)"
        >{{ data.title }}</div>
      </div>
    </outline-tree>
  </Affix>
</template>

<script>
export default {
  props: {
    data: {
      default: []
    }
  },
  data() {
    return {
      titleArr: [],
      spinShow: true,
      activeId: "",
      scrollTop: "",
      titleOffSetTop: [],
      titleId: []
    };
  },
  computed: {},
  created() {},
  mounted() {
    /*
     初始化页面
     */
    this.titleArr = Array.from(this.data);
    //获取标题元素Id
    this.$nextTick(() => {
      this.getItemId();
    });
    //监听
    window.addEventListener("scroll", this.handleScroll, true);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  watch: {},
  methods: {
    //跳转
    jumpToAnchor(id) {
      //字体变色
      this.activeId = id;
      let element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth"
        });
      }
    },
    //监听滚动高度
    handleScroll() {
      this.scrollTop =
        window.pageYOffset ||document.documentElement.scrollTop ||document.body.scrollTop;
      let scale = this.titleOffSetTop;
      //构建刻度尺
      if (this.scrollTop >= scale[scale.length - 1]) {
        //最后一个标题判断
        this.activeId = this.titleId[scale.length - 1];
      } else {
        for (let i = 0; i < scale.length; i++) {
          if (this.scrollTop >= scale[i] && this.scrollTop < scale[i + 1]) {
            this.activeId = this.titleId[i];
          }
        }
      }
    },
    //获取标题元素 id
    getItemId() {
      //获取标题元素
      let elements = Array.from(
        document.getElementsByClassName("node-render-content")
      );
      elements.forEach(item => {
        this.titleId = [...this.titleId, item.id];
        let ele = document.getElementById(item.id);
        //存入标题距离顶部高度数组
        this.titleOffSetTop = [...this.titleOffSetTop, ele.offsetTop - 50];
      });
    }
  },
  updated() {
    this.$nextTick(function() {
      this.getItemId();
    });
  },
  components: {}
};
</script>

<style scoped lang="less">
.anchor {
  width: 100%;
  background-color: var(--bgColor);
  border-radius: 10px;
  box-shadow: 0 0 1rem rgba(161, 177, 204, 0.4);
  padding: 20px;
  color: var(--textColor);
  border: 1px solid var(--borderColor);
  font-size: 16px;
  margin-top: 1rem;
  cursor: default;
  max-height: 500px;
  overflow: auto;
}
.anchor::-webkit-scrollbar {
  width: 7px;
  height: 7px;
  background-color: #fff;
}

.anchor::-webkit-scrollbar-thumb {
  border-radius: 100px;
  background: #ccc;
}

.anchor::-webkit-scrollbar-track {
  border-radius: 2px;
  background: #fff;
}
.active {
  color: #2d8cf0 !important;
}
.node-render-content {
  overflow: hidden;    
 	text-overflow: ellipsis;      //超出部分以省略号显示
 	white-space: nowrap;
}
</style>
