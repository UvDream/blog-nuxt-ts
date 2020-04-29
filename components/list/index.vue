<!--
 * @Author: wangzhongjie
 * @Date: 2020-04-15 20:21:18
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-04-29 11:37:03
 * @Description: 列表页面
 * @Email: UvDream@163.com
 -->
<template>
  <div class="list" @click="listClick(data.ID)">
    <div class="list-title">{{ data.title }}</div>
    <div class="list-tag">
      <div>
        <JIcon type="rili" size="12" />
        {{ data.add_time }}
      </div>
      <div>
        <JIcon :type="data.icon" :color="data.icon_color" size="12" />
        {{ data.type_name }}
      </div>
      <div>
        <JIcon type="fangwenliang" size="12" />
        {{ data.view_count }}
      </div>
    </div>
    <div class="list-content"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import JIcon from "../icon/index.vue";
export default Vue.extend({
  props: {
    data: {
      default: {},
      type: Object
    }
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {
    console.log(this.data)
  },
  watch: {},
  methods: {
    listClick(id: Number) {
      this.$router.push({
        path: `/detail/${id}`
      });
    }
  },
  components: {
    JIcon
  }
});
</script>

<style scoped lang="less">
@import url("../../styles/theme.less");
.list {
  width: 100%;
  border: 1px solid var(--borderColor);
  background-color: var(--bgColor);
  border-radius: 10px;
  margin-top: 1rem;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  padding: 0.5rem;
  &-title {
    font-size: 1.3rem;
    color: #1e90ff;
    padding: 0 0 0.5rem 0.5rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  &-tag {
    display: flex;
    padding: 0 0.5rem;
    align-items: center;
    color: var(--textColor);
    & > div {
      margin-right: 1rem;
    }
  }
}
</style>
