<!--
 * @Author: wangzhongjie
 * @Date: 2020-04-24 13:34:43
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-04-24 14:50:31
 * @Description: 手机底部导航栏
 * @Email: UvDream@163.com
 -->
<template>
  <Row type="flex" justify="center">
    <Col :xs="24" :sm="24" :md="0" :lg="0" :xl="0">
      <div class="moblie">
        <section
          v-for="(item, index) in list"
          :key="index"
          class="moblie-tab"
          @click="tabClick(item.id)"
        >
          <nuxt-link :to="item.link">
            <div>
              <!-- <JIcon :type="item.icon" size="18" /> -->
              <span
                class="icon iconfont"
                :class="[{ active: activeID == item.id }, item.icon]"
              ></span>
            </div>
            <div
              class="moblie-tab-text"
              :class="{ active: activeID == item.id }"
            >
              {{ item.name }}
            </div>
          </nuxt-link>
        </section>
      </div>
    </Col>
  </Row>
</template>

<script lang="ts">
import JIcon from "../icon/index.vue";
import Vue from "vue";
export default Vue.extend({
  props: {},
  data() {
    return {
      activeID: 1,
      list: [
        { id: 1, name: "首 页", icon: "index", link: "/" },
        { id: 2, name: "标 签", icon: "huabanfuben", link: "/tag" },
        { id: 3, name: "我的开源", icon: "github", link: "/github" },
        { id: 4, name: "关于我", icon: "wode", link: "/about" }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    tabClick(id: any) {
      this.activeID = id;
    }
  },
  components: { JIcon }
});
</script>

<style scoped lang="less">
@import url("../../styles/theme.less");
.moblie {
  width: 100%;
  height: 50px;
  display: flex;
  position: fixed;
  bottom: 0;
  &-tab {
    width: 25%;
    text-align: center;
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    background-color: var(--bgColor);
    padding-top: 5px;
    .icon {
      color: var(--textColor);
    }
    &-text {
      color: var(--textColor);
    }
  }
}
.active {
  color: var(--themeColor) !important;
}
</style>
