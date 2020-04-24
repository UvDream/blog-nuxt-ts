<template>
  <div class="body">
    <!-- 菜单 -->
    <JMenus />
    <!-- <div class="body-main" ref="markdownBody"> -->
    <nuxt />
    <!-- 底部 -->
    <JFooter />
    <BackTop :bottom="55" :right="20" target="">
      <div class="top">
        <j-icon type="huidaodingbu" size="38"></j-icon>
      </div>
    </BackTop>
    <!-- </div> -->

    <!-- 手机导航栏 -->
    <JMobile />
    <!-- 回到顶部 -->

    <!-- 主题切换 -->
    <div class="body-theme">
      <Poptip v-model="visible" width="85">
        <JIcon
          type="zhuti"
          size="15"
          @click="visiable = !visible"
          padding="8px 8px"
        />
        <div slot="content" class="body-theme-tip">
          <div
            v-for="(item, index) in themeList"
            :key="index"
            :class="{ active: themeId == item.id }"
            @click="themeChange(item.id)"
          >
            {{ item.name }}
          </div>
        </div>
      </Poptip>
    </div>
  </div>
</template>

<script lang="ts">
import JMenus from "../components/menus/index.vue";
import JFooter from "../components/footer/index.vue";
import { iconfontUrl, iconfontVersion } from "../config/env";
import { loadStyle, changeTheme } from "../util/util";
import JIcon from "../components/icon/index.vue";
import Vue from "vue";
import JMobile from "../components/menus/mobile.vue";
export default Vue.extend({
  data() {
    return {
      visible: false,
      themeId: 1,
      themeList: [
        {
          id: 1,
          name: "默认主题"
        },
        {
          id: 2,
          name: "暗黑主题"
        }
      ]
    };
  },
  mounted() {
    iconfontVersion.forEach((ele: any) => {
      loadStyle(iconfontUrl.replace("$key", ele));
    });
  },
  components: {
    JMenus,
    JFooter,
    JIcon,
    JMobile
  },
  methods: {
    themeChange(id: number) {
      (this as any).themeId = id;
      changeTheme(id);
      (this as any).visible = !(this as any).visible;
    }
  }
});
</script>
<style lang="less" scoped>
.active {
  color: var(--themeColor);
}
</style>
<style lang="less">
@import url("../styles/theme.less");

body,
html {
  margin: 0;
  background-color: var(--grayBgColor);
  height: 100%;
}
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.body {
  height: 100%;
  &-theme {
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    position: fixed;
    background-color: var(--bgColor);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
    border: 1px solid var(--borderColor);
    bottom: 110px;
    right: 20px;
    &-tip {
      cursor: default;
      background-color: var(--bgColor);
      & > div {
        height: 30px;
        line-height: 30px;
      }
    }
  }
}

#__nuxt,
#__layout {
  height: 100%;
}
.ivu-poptip-body {
  border-radius: 4px;
  background-color: var(--bgColor);
  box-sizing: border-box;
  border: 1px solid var(--borderColor);
}
.ivu-poptip-popper {
  min-width: 80px;
}
.ivu-poptip-arrow:after {
  border-top-color: var(--bgColor) !important;
}
</style>
