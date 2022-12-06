<template>
<!--  <div @click="router.push('print')">去打印</div>-->
  <div @click="router.push('photo')">去拍照</div>
  <div @click="router.push('video')">去拍视频</div>
  <div @click="router.push('audio')">去录音</div>
  <p>拍照、视频仅支持手机端，录音都支持</p>
</template>

<script setup>
import router from "@/router";
</script>

<style scoped>
div {
  width: 100px;
  height: 50px;
  background: green;
  color: aliceblue;
  text-align: center;
  line-height: 50px;
  font-size: 26px;
  margin: 50px;
}
</style>
