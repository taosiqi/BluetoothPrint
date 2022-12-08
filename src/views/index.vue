<template>
  <!--  <div @click="router.push('print')">去打印</div>-->
  JavaScrip Api在安卓上存在较多兼容性问题
  <div @click="router.push('photo')">JS-去拍照</div>

  <div @click="router.push('video')">JS-去拍视频</div>
  <div @click="router.push('audio')">JS-去录音</div>

  JsSdk均是调用的安卓IOS原生功能，仅在企业微信以及钉钉环境有效
  <div><a href="https://open.work.weixin.qq.com/api/jsapidemo#menu-image">企业微信JsSdk-拍照</a></div>
  <div><a href="https://open.work.weixin.qq.com/api/jsapidemo#menu-voice">企业微信JsSdk-录音</a></div>
  <div><a href=" https://open.work.weixin.qq.com/api/jsapidemo#menu-scan">企业微信JsSdk-扫码</a></div>

  <div><a href="https://dev-apsmanage.rspaas.cn/#/demo">钉钉JsSdk-拍照&录音&扫码</a></div>
</template>

<script setup>
import router from "@/router";
</script>

<style scoped>
div {
  /*width: 100px;*/
  height: 50px;
  background: green;
  color: aliceblue;
  text-align: center;
  line-height: 50px;
  font-size: 26px;
  margin: 20px;
}
a{
  color: #fff;
  text-decoration-line: none;
}
</style>
