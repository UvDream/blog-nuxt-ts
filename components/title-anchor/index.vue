<!--
 * @Author: wangzhongjie
 * @Date: 2020-04-16 16:43:04
 * @LastEditors: PanBaoQuan
 * @LastEditTime: 2020-06-19 16:37:37
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
    </Anchor> -->
    <outline-tree :treeData="data" class="anchor" ref="tree">
    <div slot-scope="{ data, parentData, level }">
      <div
        class="node-render-content"
        :class="{active:data.id==activeId}"
        @click.stop="jumpToAnchor(data.id)">
        {{ data.title }}
      </div>
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
      activeId:"",
      scrollTop:""
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.titleArr = Array.from(this.data);
     window.addEventListener('scroll', this.handleScroll, true)
  },
  destroyed(){
     window.removeEventListener('scroll', this.handleScroll)
  },
  watch: {
  },
  methods: {
    //跳转
    jumpToAnchor (id) {
      //字体变色
      this.activeId = id
      let element = document.getElementById(id)
      if (element) {
          window.scrollTo({
              top:element.offsetTop,
              behavior:'smooth'
          })
      }
    },
    //监听滚动高度
    handleScroll () {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      console.log(this.scrollTop)
    },
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
 
}
.active {
  color: #2d8cf0!important;
}
</style>
