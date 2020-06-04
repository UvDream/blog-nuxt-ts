<!--
 * @Author: wangzhongjie
 * @Date: 2020-04-24 14:35:01
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-05-06 15:12:23
 * @Description: 关于我
 * @Email: UvDream@163.com
 -->
<template>
  <div class="about">
    <Timeline>
      <TimelineItem v-for="item in list" :key="item.id" :color="item.color">
        <p class="about-time">{{ item.startTime }}~{{ item.endTime }}</p>
        <p class="content">{{ item.company }}</p>
      </TimelineItem>
    </Timeline>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {},
  data() {
    return {
      list: [
        {
          id: 1,
          startTime: "2019.6",
          endTime: "至今",
          company: "中科曙光南京研究院",
          color: "green"
        },
        {
          id: 2,
          startTime: "2018.4",
          endTime: "2019.6",
          company: "太平洋保险",
          color: "green"
        }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
});
</script>

<style scoped lang="less">
.about {
  margin: 60px 0;
  padding: 20px;
  &-time {
    font-size: 14px;
    font-weight: bold;
  }
  &-content {
    padding-left: 5px;
  }
}
</style>
