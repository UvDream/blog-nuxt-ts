<!--
 * @Author: wangzhongjie
 * @Date: 2020-04-16 16:43:04
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-04-16 21:12:53
 * @Description: 文章目录
 * @Email: UvDream@163.com
 -->
<template>
  <div>
    <Anchor show-ink class="anchor">
      <AnchorLink
        v-for="(item, index) in titleArr"
        :key="index"
        :href="'#' + item.title"
        :title="item.title"
      >
        <AnchorLink
          v-show="item.children.length > 0"
          v-for="(items, indexs) in item.children"
          :key="indexs"
          :href="'#' + items.title"
          :title="items.title"
        >
          <AnchorLink
            v-show="items.children.length > 0"
            v-for="(i, id) in items.children"
            :key="id"
            :href="'#' + i.title"
            :title="i.title"
          >
          </AnchorLink>
        </AnchorLink>
      </AnchorLink>
    </Anchor>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    data: {
      default: []
    }
  },
  data() {
    return {
      titleArr: [],
      spinShow: true
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.titleArr = Array.from(this.data);
  },
  watch: {
    data: function(params) {
      let h1Index = 0;
      let h2Index = 0;
      params.forEach((element, index) => {
        let obj = { title: "", children: [] };
        if (element.nodeName == "H1") {
          obj = { title: element.innerText, children: [] };
          this.titleArr.push(obj);
          h1Index = this.titleArr.length - 1;
        }
        if (element.nodeName == "H2") {
          obj = { title: element.innerText, children: [] };
          this.titleArr[h1Index].children.push(obj);
          h2Index = this.titleArr[h1Index].children.length - 1;
        }
        if (element.nodeName == "H3") {
          console.log(element.innerText);
          obj = { title: element.innerText, children: [] };
          console.log(obj);
          this.titleArr[h1Index].children[h2Index].children.push(obj);
        }
      });
      console.log("全新的数组");
      console.log(this.titleArr);
    }
  },
  methods: {},
  components: {}
});
</script>

<style scoped lang="less">
@import url("../../styles/theme.less");
.anchor {
  margin-top: 1rem;
}
</style>
