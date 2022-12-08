<template>
  <div @click="print">打印</div>
</template>

<script setup>
import PrinterJobs from '../assets/printerjobs.js'
import printerUtil from '../assets/printerutil.js'
import {ref} from 'vue'

let printCharacteristic = ref(null)

const printbuff = (buffer) => {
  printCharacteristic.value.writeValue(buffer).then(() => {
    console.log('Write done.');
  });
}
const printbuffs = (buffer) => {
  console.log(buffer.byteLength)
  // 1.并行调用多次会存在写失败的可能性，建议每次写入不超过20字节
  const maxChunk = 20;
  const delay = 100;
  for (let i = 0, j = 0, length = buffer.byteLength; i < length; i += maxChunk, j++) {
    let subPackage = buffer.slice(i, i + maxChunk <= length ? (i + maxChunk) : length);
    setTimeout(printbuff, j * delay, subPackage);
  }
}
const print = () => {
  if (printCharacteristic.value == null) {
    navigator.bluetooth.requestDevice({
      filters: [{
        namePrefix: "HM-A400" //0000xxxx-0000-1000-8000-00805f9b34fb
      }],
      optionalServices: ['0000ff00-0000-1000-8000-00805f9b34fb']
    }).then(device => {
      console.log('> 找到设备 ' + device.name+' 开始建立链接...');
      return device.gatt.connect();
    })
        .then(server => server.getPrimaryService("0000ff00-0000-1000-8000-00805f9b34fb")) //000018f0-0000-1000-8000-00805f9b34fb
        .then(service => service.getCharacteristic("0000ff02-0000-1000-8000-00805f9b34fb")) //00002af1-0000-1000-8000-00805f9b34fb
        .then(characteristic => {
          printCharacteristic.value = characteristic;
          let printerJobs = new PrinterJobs()
          printerJobs.print(`下单时间：`).setSize(2,2).text('2021-07-25').setSize(1,1).text('下单时间').print(printerUtil.fillLine())
          let buffer = printerJobs.buffer();
          console.log('buffer>>>', buffer)
          printbuffs(buffer)
        })
        .catch((error) => {
          console.log(error);
        });
  }
}
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
