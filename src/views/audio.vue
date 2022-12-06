<template>
  <div>
    <p>安卓钉钉-无法录音</p>
    <input type="button" @click="startRec()" value="开始录音">
    <div>{{status}}</div>
    <p></p>
    <input type="button" @click="playRec()" value="结束">
    <br>
    <audio :src="src" controls></audio>

  </div>

</template>

<script setup>
import Recorder from 'recorder-core/recorder.mp3.min'
import {ref} from "vue";
let rec=ref(null)
let src=ref(null)
let status=ref(null)
const startRec = () => {
  rec.value=Recorder();//使用默认配置，mp3格式
  //打开麦克风授权获得相关资源
  rec.value.open(function(){
    //开始录音
    rec.value.start();
    status.value='录音中'
  },function(msg,isUserNotAllow){
    //用户拒绝了权限或浏览器不支持
    status.value=(isUserNotAllow?"用户拒绝了权限，":"")+"无法录音:"+msg
  });
}

const playRec = () => {
  //停止录音，得到了录音文件blob二进制对象，想干嘛就干嘛
  rec.value.stop(function(blob,duration){
    //非常简单的就能拿到blob音频url
    src.value=URL.createObjectURL(blob);
    status.value='录音结束'
  },function(msg){
    status.value="录音失败:"+msg
  });
}
</script>

<style scoped>
div {

}
</style>
