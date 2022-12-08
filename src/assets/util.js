function grayPixle(pix) {
	return pix[0] * 0.299 + pix[1] * 0.587 + pix[2] * 0.114;
}
/**
 * overwriteImageData
 * @param {object} data
 * {
			width,//图片宽度
			height,//图片高度
			imageData,//Uint8ClampedArray
			threshold,//阈值
    }
 */
export function overwriteImageData(data) {
	let sendWidth = data.width,
		sendHeight = data.height;
	const threshold = data.threshold || 180;
	let sendImageData = new ArrayBuffer((sendWidth * sendHeight) / 8);
	sendImageData = new Uint8Array(sendImageData);
	let pix = data.imageData;
	const part = [];
	let index = 0;
	for (let i = 0; i < pix.length; i += 32) {
		//横向每8个像素点组成一个字节（8位二进制数）。
		for (let k = 0; k < 8; k++) {
			const grayPixle1 = grayPixle(pix.slice(i + k * 4, i + k * 4 + (4 - 1)));
			//阈值调整
			if (grayPixle1 > threshold) {
				//灰度值大于threshold位   白色 为第k位0不打印
				part[k] = 0;
			} else {
				part[k] = 1;
			}
		}
		let temp = 0;
		for (let a = 0; a < part.length; a++) {
			temp += part[a] * Math.pow(2, part.length - 1 - a);
		}
		//开始不明白以下算法什么意思，了解了字节才知道，一个字节是8位的二进制数，part这个数组存的0和1就是二进制的0和1，传输到打印的位图数据的一个字节是0-255之间的十进制数，以下是用权相加法转十进制数，理解了这个就用上面的for循环替代了
		// const temp =
		//     part[0] * 128 +
		//     part[1] * 64 +
		//     part[2] * 32 +
		//     part[3] * 16 +
		//     part[4] * 8 +
		//     part[5] * 4 +
		//     part[6] * 2 +
		//     part[7] * 1;
		sendImageData[index++] = temp;
	}
	return {
		array: Array.from(sendImageData),
		width: sendWidth / 8,
		height: sendHeight,
	};
}
/**
 * sendDataToDevice
 * @param {object} options
 * {
            deviceId,
            serviceId,
            characteristicId,
            value [ArrayBuffer],
            lasterSuccess,
    }
 */
export function sendDataToDevice(options) {
	let byteLength = options.value.byteLength;
	//这里默认一次20个字节发送
	const speed = options.onceByleLength || 20;
	if (byteLength > 0) {
		wxAsyncPromise('writeBLECharacteristicValue', {
			...options,
			value: options.value.slice(0, byteLength > speed ? speed : byteLength),
		})
			.then((res) => {
				if (byteLength > speed) {
					sendDataToDevice({
						...options,
						value: options.value.slice(speed, byteLength),
					});
				} else {
					options.lasterSuccess && options.lasterSuccess();
				}
			})
			.catch((res) => {
				console.log(res);
			});
	}
}
// 使用的 ESC/POS指令， 十进制方式
// 更多指令请查看 ./PrintCommandDocs/ESC-POS指令文档(凯盛诺打印机代表).pdf

export const printCommand = {
	left: [27, 97, 0], //居左
	center: [27, 97, 1], //居中
	right: [27, 97, 2], //居右
	clear: [27, 64], //初始化
	enter: [10],
};
/**
 * printImage
 * @param {object} opt
 * {
			deviceId,//蓝牙设备id
			serviceId,//服务id
			characteristicId,//可用特征值uuid
			lasterSuccess , //最后完成的回调
			onProgress, //每段发送完成的回调
	}
 * @param {object} imageInfo // 由overwriteImageData返回的对象
 */
export function printImage(imageInfo = {},opt = {}, ) {
	const { printAlign = 'left' } = opt;
	let arr = imageInfo.array
	let	width = imageInfo.width;
	const writeArray = [];
	const xl = width % 256;
	const xh = width / 256;
	//分行发送图片数据
	const command = []
		.concat(printCommand.clear)
		.concat(printCommand[printAlign])
		.concat([29, 118, 48, 0, xl, xh, 1, 0]);
	for (let i = 0; i < arr.length / width; i++) {
		const subArr = arr.slice(i * width, i * width + width);
		const tempArr = command.concat(subArr);
		writeArray.push(new Uint8Array(tempArr));
	}
	const len = writeArray.length;
	const print = (options, writeArray) => {
		if (writeArray.length) {
			sendDataToDevice({
				...options,
				value: writeArray.shift().buffer,
			});
		}
	};
	print(opt, writeArray);
}
