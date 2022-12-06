<template>
  <div>
<!-- capture="camera"-->
    <input type="file" name="file" class="upload-file" @change="uploadFile" ref="frontFile" accept="image/*" />
    <img :src="src" alt="" />
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
