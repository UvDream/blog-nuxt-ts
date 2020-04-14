<template>
  <div>
    <JMenus />
    <nuxt />
    <JFooter />
  </div>
</template>
<script lang="ts">
import JMenus from "../components/menus/index.vue";
import JFooter from "../components/footer/index.vue";
import { iconfontUrl, iconfontVersion } from "../config/env";
import { loadStyle } from "../util/util";
export default {
  mounted() {
    iconfontVersion.forEach((ele: any) => {
      loadStyle(iconfontUrl.replace("$key", ele));
    });
  },
  components: {
    JMenus,
    JFooter
  }
};
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #f5f5f5;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
