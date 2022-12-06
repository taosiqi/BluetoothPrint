<template>
  <div>
    录像：<input type="file"  @change="uploadFile" ref="frontFile" accept="video/*" capture="environment"/>
    <p></p>
    相册选择<input type="file"  @change="uploadFile" ref="frontFile" accept="video/*"/>
    <p></p>
    <video controls="controls" :src="src" style="height: 300px"></video>
    <br>
<!-- <video controls="controls" src="https://static-1253419794.file.myqcloud.com/qiniu/%E5%AE%A0%E7%89%A9%E5%8C%BB%E9%99%A2%E6%BC%94%E7%A4%BA.MP4"></video>-->
    <br>
  </div>

</template>

<script setup>
import {ref} from "vue";

let src=ref('')
const uploadFile = (el) => {
  if (el && el.target && el.target.files && el.target.files.length > 0) {
    const files = el.target.files[0]
    const reader = new FileReader(); // 创建读取文件对象
    reader.readAsDataURL(el.target.files[0]); // 发起异步请求，读取文件
    reader.onload = function (res) { // 文件读取完成后
      src.value=res.target.result
    };
  }
}
</script>

<style scoped>
div {

}
</style>
