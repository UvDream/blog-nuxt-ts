<!--
 * @Author: wangzhongjie
 * @Date: 2020-04-13 21:47:16
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-04-13 22:22:59
 * @Description:菜单
 * @Email: UvDream@163.com
 -->
<template>
  <div>
    <Menu mode="horizontal" :theme="theme1" active-name="1">
      <MenuItem name="1">
        <Icon type="ios-paper" />
        内容管理
      </MenuItem>
      <MenuItem name="2">
        <Icon type="ios-people" />
        用户管理
      </MenuItem>
      <Submenu name="3">
        <template slot="title">
          <Icon type="ios-stats" />
          统计分析
        </template>
        <MenuGroup title="使用">
          <MenuItem name="3-1">
            新增和启动
          </MenuItem>
          <MenuItem name="3-2">
            活跃分析
          </MenuItem>
          <MenuItem name="3-3">
            时段分析
          </MenuItem>
        </MenuGroup>
        <MenuGroup title="留存">
          <MenuItem name="3-4">
            用户留存
          </MenuItem>
          <MenuItem name="3-5">
            流失用户
          </MenuItem>
        </MenuGroup>
      </Submenu>
    </Menu>
    <!-- <p>Change theme</p>
    <RadioGroup v-model="theme1">
      <Radio label="light" />
      <Radio label="dark" />
      <Radio label="primary" />
    </RadioGroup> -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      theme1: 'light'
    }
  }
}
</script>
