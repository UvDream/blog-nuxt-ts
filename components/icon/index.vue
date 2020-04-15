<!--
 * @Author: wangzhongjie
 * @Date: 2020-04-14 14:19:32
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-04-15 21:33:54
 * @Description: icon
 * @Email: UvDream@163.com
 -->
<template>
  <span
    class="icon iconfont"
    :class="type"
    :style="{ fontSize: size + 'px', color: color }"
  ></span>
</template>

<script lang="ts">
export default {
  props: {
    type: {
      default: "qq",
      type: String
    },
    size: {
      default: 28,
      type: [Number, String]
    },
    color: {
      default: "#999",
      type: String
    }
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="less"></style>
