<!--
 * @Author: wangzhongjie
 * @Date: 2020-04-16 16:43:04
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-04-30 15:47:19
 * @Description: 文章目录
 * @Email: UvDream@163.com
 -->
<template>
  <Affix :offset-top="50">
    <Anchor show-ink class="anchor">
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
    </Anchor>
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
      spinShow: true
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.titleArr = Array.from(this.data);
  },
  watch: {
   
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
@import url("../../styles/theme.less");
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
</style>
