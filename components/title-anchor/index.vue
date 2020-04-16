<!--
 * @Author: wangzhongjie
 * @Date: 2020-04-16 16:43:04
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-04-16 17:16:55
 * @Description: 文章目录
 * @Email: UvDream@163.com
 -->
<template>
  <div>
     
  </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend( {
  props: {
      data:{
          default:[],
      }
  },
  data() {
    return {
    titleArr:[]
    };
  },
  computed: {},
  created() {},
  mounted() {
      this.titleArr=Array.from(this.data)
  },
  watch: {
      data:function (params:any) {
          let hIndex=0
          params.forEach((element:Object,index:numer) => {
            let obj={title:'',children:[]}
            if(element.nodeName=="H1"){
                obj={title:element.innerText,children:[]}
                this.titleArr.push(obj)
                hIndex=this.titleArr.length-1
            }
            if(element.nodeName=="H2"){
               obj={title:element.innerText,children:[]}
                this.titleArr[hIndex].children.push(obj)
            }
          });
          console.log("全新的数组")
          console.log(this.titleArr)
      }
  },
  methods: {},
  components: {}
});
</script>

<style scoped lang="less"></style>
